const express = require('express');
const authController = require('../controllers/auth/auth-controller');
const { authenticated } = require('../middleware/middleware');

const authRouter = new express.Router();

{
	/* Define routes */
}
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

module.exports = { authRouter };
