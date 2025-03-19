const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

{
	/* Define routes */
}
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
