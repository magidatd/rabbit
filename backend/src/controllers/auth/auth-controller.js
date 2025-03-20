const userService = require('../../services/user-service');
const { generateTokens } = require('../../utils/jwt');
const {
	addRefreshTokenToWhitelist,
	findRefreshToken,
	deleteRefreshTokenByID,
	revokeTokens,
} = require('../../services/auth-service');

const jwt = require('jsonwebtoken');

{
	/* Register */
}
const register = async (req, res) => {
	try {
		const { email } = req.body;

		let user = await userService.getUserByEmail(email);
		if (user) {
			return res.status(400).json({ message: 'Email currently in use' });
		}

		user = await userService.createUser(req.body);

		const { accessToken, refreshToken } = await generateTokens(user);

		await addRefreshTokenToWhitelist(refreshToken, user.id);

		res.json({
			accessToken,
			refreshToken,
		});
	} catch (error) {
		res.status(400).json({ error: 'Failed to create user.' });
	}
};

{
	/* Login */
}
const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		let user = await userService.getUserByEmail(email);

		if (!user) return res.status(403).json({ message: 'Invalid credentials.' });

		const isMatch = await userService.matchPassword(password, user.password);

		if (!isMatch)
			return res.status(403).json({ message: 'Invalid credentials.' });

		const { accessToken, refreshToken } = await generateTokens(user);

		await addRefreshTokenToWhitelist(refreshToken, user.id);

		res.json({
			accessToken,
			refreshToken,
		});
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error.');
	}
};

const refreshToken = async (req, res, next) => {
	try {
		const { refreshToken } = req.body;

		if (!refreshToken) {
			res.status(400);
			throw new Error('Missing refresh token.');
		}

		const savedRefreshToken = await findRefreshToken(refreshToken);

		if (
			!savedRefreshToken ||
			savedRefreshToken.revoked === true ||
			Date.now() >= savedRefreshToken.expireAt.getTime()
		) {
			res.status(401);
			throw new Error('Unauthorised.');
		}

		const user = await userService.getUserByID(savedRefreshToken.userId);

		if (!user) {
			res.status(401);
			throw new Error('Unauthorised.');
		}

		await deleteRefreshTokenByID(savedRefreshToken.id);

		const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);

		await addRefreshTokenToWhitelist(
			{ refreshToken: newRefreshToken },
			{ userId: user.id },
		);

		res.json({
			accessToken,
			refreshToken: newRefreshToken,
		});
	} catch (error) {
		next(error);
	}
};

{
	/* This endpoint is only for demo purpose.
 	Move this logic where you need to revoke the tokens( for ex, on password reset) */
}
const revokeRefreshTokens = async (req, res, next) => {
	try {
		const { userId } = req.body;

		await revokeTokens(userId);

		res.json({ message: `Tokens revoked for user with id: #${userId}` });
	} catch (error) {
		next(error);
	}
};

module.exports = { register, login, refreshToken, revokeRefreshTokens };
