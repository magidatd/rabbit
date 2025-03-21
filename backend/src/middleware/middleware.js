const jwt = require('../utils/jwt');

{
	/* Middleware to protect routes */
}
const authenticated = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res
			.status(401)
			.json({ message: 'Authorization failed: No authorization headers.' });
	}

	if (authHeader.startsWith('Bearer')) {
		const token = authHeader.split(' ')[1];

		if (!token)
			return res
				.status(401)
				.json({ message: 'Authorization failed: No token provided.' });

		const payload = await jwt.verifyToken(token);

		req.user = payload.user;

		next();
	} else {
		return res
			.status(401)
			.json({ message: 'Authorization failed: No token provided.' });
	}
	//next();
};

{
	/* Middleware to check if the user is admin */
}
const admin = (req, res, next) => {
	if (req.user && req.user.role === 'admin') {
		next();
	} else {
		res.status(403).json({ message: 'Not authorized as an admin.' });
	}
};

module.exports = { authenticated, admin };
