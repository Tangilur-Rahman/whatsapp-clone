const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const googleModel = require("./../model/googleModel");

const verifyUser = async (req, res, next) => {
	try {
		const user = await jwt.verify(
			req.cookies.userSession,
			process.env.SECRET_KEY
		);

		const document = await userModel.findOne({
			_id: user.id,
			email: user.email
		});

		let google;
		if(!document){
			 google = await googleModel.findOne({
				email: user.email
			});
		}
		req.verifiedUserCustom = document;

		req.verifiedUserGoogle = google;

		next();
	} catch (error) {
		res.status(400).json({ error: "Please Login First 🥰" });
	}
};

module.exports = verifyUser;
