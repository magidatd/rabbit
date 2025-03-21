const userService = require('../services/user-service');

{
	/* Get all users */
}
const getAllUsers = async (req, res) => {
	try {
		const users = await userService.getAllUsers();

		res.json(users);
	} catch (error) {
		console.error(error);
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
			return res.status(400).json({ message: 'Email currently in use.' });
		}

		user = await userService.createUser(req.body);

		res.status(201).json({
			user: { id: user.id, name: user.name, email: user.email, role: user.role },
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: 'Failed to create user.' });
	}
};

{
	/* Get user by Id */
}
const getUserByID = async (req, res) => {
	try {
		const user = await userService.getUserByID(req.params.id);

		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ error: 'User not found.' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to fetch user.' });
	}
};

{
	/* Update user */
}
const updateUser = async (req, res) => {
	try {
		const updatedUser = await userService.updateUser(req.params.id, req.body);

		res.json(updatedUser);
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: 'Failed to update user.' });
	}
};

{
	/* Delete user */
}
const deleteUser = async (req, res) => {
	try {
		await userService.deleteUser(req.params.id);

		res.status(204).send({ message: 'User successfully deleted.' });
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: 'Failed to delete user.' });
	}
};

{
	/* Get profile */
}
const getProfile = async (req, res) => {
	const { id, role } = req.user;

	try {
		let user = await userService.getUserByID(id);

		if (!user)
			return res
				.status(403)
				.json({ message: 'User with token not found | token expired.' });

		res.json({
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error.');
	}
};

module.exports = {
	getAllUsers,
	createUser,
	getUserByID,
	updateUser,
	deleteUser,
	getProfile,
};
