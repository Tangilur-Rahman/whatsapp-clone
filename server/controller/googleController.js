const jwt = require("jsonwebtoken");

// own modules
const googleModel = require("./../model/googleModel");

// for "/by-google" post
const googlePost = async (req, res) => {
	const { name, email, imageUrl } = req.body;

	try {
		if (name && email) {
			// create token
			const token = await jwt.sign({ email }, process.env.SECRET_KEY, {
				expiresIn: "365d"
			});

			res.cookie("userSession", token, {
				expires: new Date(Date.now() + 31556952000)
			});

			// find from database
			const existUser = await googleModel.findOne({ email });
			if (existUser) {
				res.status(200).json({ message: "Welcome to our page ❤️" });
			} else {
				const newUser = await googleModel({
					name,
					email,
					profilePic: imageUrl
				});

				await newUser.save();

				res.status(200).json({ message: "Welcome to our page ❤️" });
			}
		} else {
			res
				.status(500)
				.json({ error: "Bad response from Google, Try Another way😏" });
		}
	} catch (error) {
		res
			.status(500)
			.json({ error: "Bad response from Google, Try Another way😏" });
	}
};

module.exports = { googlePost };
