const express = require('express');
const authController = require('../../controllers/auth/auth-controller');

const router = express.Router();

{
	/* Define routes */
}
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
