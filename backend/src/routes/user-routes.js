const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

{
	/* Define routes */
}
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserByID);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
