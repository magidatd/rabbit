const prisma = require('../prisma/prisma-client');
const { hashToken } = require('../utils/hash-token');

{
	/* used when we create a refresh token,
    a refresh token is valid for 30 days
    that means that if a user is inactive for more than 30 days, he will be required to log in again. */
}
const addRefreshTokenToWhitelist = async (refreshToken, userId) => {
	return await prisma.refreshToken.create({
		data: {
			hashedToken: hashToken(refreshToken),
			userId,
			expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
		},
	});
};

{
	/* used to check if the token sent by the client is in the database. */
}
const findRefreshToken = async (token) => {
	return await prisma.refreshToken.findUnique({
		where: { hashedToken: hashToken(token) },
	});
};

{
	/* soft delete tokens after usage. */
}
const deleteRefreshTokenByID = async (id) => {
	return await prisma.refreshToken.update({
		where: { id: id },
		data: { revoked: true },
	});
};

const revokeTokens = async (userId) => {
	return await prisma.refreshToken.updateMany({
		where: { userId: userId },
		data: { revoked: true },
	});
};

module.exports = {
	addRefreshTokenToWhitelist,
	findRefreshToken,
	deleteRefreshTokenByID,
	revokeTokens,
};
