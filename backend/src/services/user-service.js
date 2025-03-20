const prisma = require('../prisma/prisma-client');
const bcrypt = require('bcryptjs');

{
	/* Get all users */
}
const getAllUsers = async () => {
	return await prisma.user.findMany();
};

{
	/* Create a new user */
}
const createUser = async (data) => {
	const { name, email, password } = data;
	const hashedPassword = await hashPassword(password);

	data = { name: name, email: email, password: hashedPassword };

	return await prisma.user.create({ data });
};

{
	/* Get user by email */
}
const getUserByEmail = async (email) => {
	return await prisma.user.findFirst({ where: { email: email } });
};

{
	/* Get user by ID */
}
const getUserByID = async (id) => {
	return await prisma.user.findUnique({ where: { id: id } });
};

{
	/* Update a user */
}
const updateUser = async (id, data) => {
	return await prisma.user.update({ where: { id: id }, data });
};

{
	/* Delete user */
}
const deleteUser = async (id) => {
	return await prisma.user.delete({ where: { id: id } });
};

{
	/* Hash password */
}
const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);

	return await bcrypt.hash(password, salt);
};

{
	/* Compare hashed password with entered password */
}
const matchPassword = async (enteredPassword, password) => {
	return await bcrypt.compare(enteredPassword, password);
};

module.exports = {
	getAllUsers,
	createUser,
	getUserByEmail,
	getUserByID,
	updateUser,
	deleteUser,
};
