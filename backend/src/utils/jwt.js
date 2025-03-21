const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateAccessToken = async (user) => {
	const payload = { user: { id: user.id, role: user.role } };

	return await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
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

const verifyToken = async (token) => {
	const decoded = await jwt.verify(token, process.env.JWT_SECRET);

	return decoded;
};

module.exports = {
	generateAccessToken,
	generateRefreshToken,
	generateTokens,
	verifyToken,
};
