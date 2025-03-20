const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth/auth-routes');

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

server.use('/api', userRoutes);

server.use('/api', authRoutes);

server.listen(PORT, () => {
	console.log(`Rabbit server is running on http://localhost:${PORT}`);
});
