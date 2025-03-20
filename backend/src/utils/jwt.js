const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateAccessToken = async (user) => {
	const payload = { user: { id: user.id, role: user.role } };

	return await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5m' });
};

const generateRefreshToken = async () => {
	const token = await crypto.randomBytes(16).toString('base64url');

	return token;
};

const generateTokens = async (user) => {
	const accessToken = await generateAccessToken(user);
	const refreshToken = await generateRefreshToken();

	return { accessToken, refreshToken };
};

module.exports = { generateAccessToken, generateRefreshToken, generateTokens };
