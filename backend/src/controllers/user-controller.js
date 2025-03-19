const userService = require('../services/user-service');

{
	/* Get all users */
}
const getAllUsers = async (req, res) => {
	try {
		const users = await userService.getAllUsers();

		res.json(users);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch users.' });
	}
};

{
	/* Create user */
}
const createUser = async (req, res) => {
	try {
		const { email } = req.body;

		let user = await userService.getUserByEmail(email);
		if (user) {
			return res.status(400).json({ message: 'Email currently in use' });
		}

		user = await userService.createUser(req.body);

		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ error: 'Failed to create user.' });
	}
};

module.exports = { getAllUsers, createUser };
