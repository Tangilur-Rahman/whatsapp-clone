// own modules
const userModel = require("./../model/userModel");

// for "/users" GET
const getUsers = async (req, res) => {
	const verifiedUser = req.verifiedUserCustom
		? req.verifiedUserCustom
		: req.verifiedUserGoogle;

	try {
		const documents = await userModel.find({
			email: { $ne: verifiedUser.email }
		});

		res.status(200).json(documents);
	} catch (error) {
		res.status(500).json({ error: "Server Error! Try Again Latter" });
	}
};

// for "/users/search" GET
const searchUsers = async (req, res) => {
	const verifiedUser = req.verifiedUserCustom
		? req.verifiedUserCustom
		: req.verifiedUserGoogle;
	try {
		const users = await userModel
			.find({
				$or: [
					{
						name: {
							$regex: req.query.search,
							$options: "i"
						}
					},
					{
						email: {
							$regex: req.query.search,
							$options: "i"
						}
					}
				]
			})
			.find({
				email: { $ne: verifiedUser.email }
			});

		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: "Not Found Users" });
	}
};

module.exports = { searchUsers, getUsers };
