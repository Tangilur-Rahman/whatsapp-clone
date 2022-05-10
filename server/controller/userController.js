// own modules
const userModel = require("./../model/userModel");

// for "/users" GET
const getUsers = async (req, res) => {
	const verifiedUser = req.verifiedUserCustom
		? req.verifiedUserCustom
		: req.verifiedUserGoogle;

	try {
		const documents = await userModel.find({
			email: { $ne: verifiedUser.email, $ne: "guest@gmail.com" }
		});

		res.status(200).json(documents);
	} catch (error) {
		res.status(500).json({ error: "Server Error! Try Again Latter" });
	}
};

// for "/users/search" GET
const searchUsers = async (req, res) => {
	try {
		const keyword = req.query.search
			? {
					$or: [
						{ name: { $regex: req.query.search, $options: "i" } },
						{ email: { $regex: req.query.search, $options: "i" } }
					]
			  }
			: {};

		if (keyword) {
			const users = await userModel
				.find(keyword)
				.find({ _id: { $ne: req.verifiedUserCustom._id } });

			res.status(200).json(users);
		} else {
			res.status(400).json({ error: "Not Found User" });
		}
	} catch (error) {
		res.status(500).json({ error: "Not Found Users" });
	}
};

module.exports = { searchUsers, getUsers };
