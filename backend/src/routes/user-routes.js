const express = require('express');
const userController = require('../controllers/user-controller');
const { authenticated } = require('../middleware/middleware');

const userRouter = new express.Router();

{
	/* Define routes */
}
userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/user/:id', userController.getUserByID);
userRouter.put('/user/:id', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);

userRouter.get('/profile', authenticated, userController.getProfile);

module.exports = { userRouter };
