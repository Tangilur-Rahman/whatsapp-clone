const jwt = require("jsonwebtoken");
const userModel = require("./../model/userModel");

const verifyToken = async (req, res, next) => {
	try {
		const user = await jwt.verify(
			req.cookies.userSession,
			process.env.SECRET_KEY
		);

		const document = await userModel.findOne({
			_id: user.id,
			email: user.email
		});

		req.verifiedUser = document;

		next();
	} catch (error) {
		res.status(400).json({ error: "Please Login First 🥰" });
	}
};

module.exports = verifyToken;
