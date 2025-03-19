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

const getUserByEmail = async (email) => {
	return await prisma.user.findFirst({ where: { email: email } });
};

const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);

	return await bcrypt.hash(password, salt);
};

const matchPassword = async (enteredPassword, password) => {
	return await bcrypt.compare(enteredPassword, password);
};

module.exports = {
	getAllUsers,
	createUser,
	getUserByEmail,
};
