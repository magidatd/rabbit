const jwt = require('jsonwebtoken');

{
	/* Middleware to protect routes */
}
const authenticated = (req, res, next) => {
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

		req.token = token;
		next();
	} else {
		return res
			.status(401)
			.json({ message: 'Authorization failed: No token provided.' });
	}
	next();
};

module.exports = { authenticated };
