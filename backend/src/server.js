const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { userRouter } = require('./routes/user-routes');
const { authRouter } = require('./routes/auth-routes');
const { productRouter } = require('./routes/product-routes');

const server = express();

server.use(express.json());
server.use(cors());

dotenv.config('.env');

const PORT = process.env.SERVER_PORT || 3000;

{
	/* API routes */
}
server.get('/', (req, res) => {
	res.send('WELCOME TO RABBIT SERVER API!');
});

server.use('/api', authRouter);
server.use('/api/users', userRouter);
server.use('/api/products', productRouter);

server.listen(PORT, () => {
	console.log(`Rabbit server is running on http://localhost:${PORT}`);
});
