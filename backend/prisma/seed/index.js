const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const Products = require('./data/products');
const Users = require('./data/users');

const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);

	return await bcrypt.hash(password, salt);
};

const runSeeders = async () => {
	await Promise.all(
		Products.map(async (product) =>
			prisma.product.upsert({
				where: { sku: product.sku },
				update: {},
				create: product,
			}),
		),
	);

	await Promise.all(
		Users.map(async (user) => {
			user.password = await hashPassword(user.password);
			return prisma.user.upsert({
				where: { email: user.email },
				update: {},
				create: user,
			});
		}),
	);
};

const die = (reason) => {
	throw new Error(reason);
};

runSeeders()
	.catch((error) => {
		console.error(`There was an error while seeding: ${error}`);
		die(error);
	})
	.finally(async () => {
		console.log('Successfully seeded database. Closing connection.');
		await prisma.$disconnect();
	});
