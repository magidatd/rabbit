const express = require('express');
const userController = require('../controllers/user-controller');

const { authenticated } = require('../middleware/middleware');

const userRouter = new express.Router();

//userRouter.use(authenticated);

{
	/* Define routes */
}
userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/user/:id', userController.getUserByID);
userRouter.put('/user/:id', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);
// router.get('/users/profile', (req, res) => {
// 	console.log({ token: req.token });
// });
//userRouter.use(authenticated);
userRouter.get('/profile', authenticated, userController.getProfile);

module.exports = { userRouter };
