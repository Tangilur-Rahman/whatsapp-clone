const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// own modules
const userModel = require("./../model/userModel");

// for "/signup" post
const signupPost = async (req, res) => {
	try {
		const { name, email, password, c_password, profileUrl } = req.body;

		if (name && email && password && c_password) {
			try {
				// check Email Already Exists or not
				const check = await userModel.findOne({ email: email });

				if (check) {
					res
						.status(406)
						.json({ error: "That Email Already Exists, Please Login" });
				} else {
					// check password match or not
					if (password === c_password) {
						if (password.length < 8) {
							res.status(406).json({ error: "Password must be minimum 8 " });
						} else {
							const hashPassword = await bcrypt.hash(password, 10);

							const document = await userModel({
								name,
								email,
								password: hashPassword,
								picture: profileUrl
							});

							// save that document into mongoDB
							await document.save();

							// create token
							const checkExist = await userModel.findOne({ email: email });
							const token = await jwt.sign(
								{ id: checkExist._id, email: checkExist.email },
								process.env.SECRET_KEY,
								{ expiresIn: "365d" }
							);

							res.cookie("userSession", token, {
								expires: new Date(Date.now() + 31556952000)
							});

							res
								.status(200)
								.json({ message: "Account Register Successfully ❤️" });
						}
					} else {
						res.status(401).json({ error: "Password Didn't Match 😒" });
					}
				}
			} catch (error) {
				res.status(500).json({ error: "Invalid Email 😂" });
			}
		} else {
			res.status(401).json({ error: "Plz, Fill-up Properly 😂" });
		}
	} catch (error) {
		res.status(500).json({ error: "Server Error! Try Again Latter 🙏" });
	}
};

module.exports = signupPost;
