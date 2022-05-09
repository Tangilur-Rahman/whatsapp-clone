// own modules
const userModel = require("./../model/userModel");

// for "/user" get
const searchUser = async (req, res) => {
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
				.find({ _id: { $ne: req.user._id } });

			res.status(200).json(users);
		} else {
			res.status(400).json({ error: "Not Found User" });
		}
	} catch (error) {
		res.status(500).json({ error: "Not Found Users" });
	}
};

module.exports = searchUser;
