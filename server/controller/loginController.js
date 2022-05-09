const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// own modules
const userModel = require("./../model/userModel");

// for /login post
const loginPost = async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);

	if (email && password) {
		try {
			const checkExist = await userModel.findOne({ email });

			const comparePassword = await bcrypt.compare(
				password,
				checkExist.password
			);

			if (comparePassword) {

				// create token
				const token = await jwt.sign(
					{ id: checkExist._id, email: checkExist.email },
					process.env.SECRET_KEY,
					{ expiresIn: "365d" }
				);

				res.cookie("userSession", token, {
					expires: new Date(Date.now() + 31556952000)
				});

				res.status(200).json({ message: "Welcome to our page ❤️" });
			} else {
				res.status(400).json({ error: "Authentication Failed! 😒" });
			}
		} catch (error) {
			res.status(400).json({ error: "Invalid Account!, plz Signup 😒" });
		}
	} else {
		res.status(400).json({ error: "Plz, Fill-up Properly 😂" });
	}
};

module.exports = {loginPost};
