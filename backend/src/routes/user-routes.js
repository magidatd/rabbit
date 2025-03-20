const express = require('express');
const userController = require('../controllers/user-controller');

const { authenticated } = require('../middleware/middleware');

const router = express.Router();

router.use(authenticated);

{
	/* Define routes */
}
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserByID);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
// router.get('/users/profile', (req, res) => {
// 	console.log({ token: req.token });
// });
router.get('/users/profile', userController.getProfile);

module.exports = router;
