// own modules
const channelModel = require("./../model/channelModel");

// for /dashboard post
const createChannel = async (req, res) => {
	const { id, name, profileUrl } = req.body;

	try {
		if (id && name && senderID) {
			const document = await channelModel({
				channelUsers: [
					{
						user_id: id,
						name,
						profilePic: profileUrl
					}
				]
			});

			await document.save();

			res.status(200).json({ message: "channel created successfully 💚" });
		} else {
			res.status(400).json({ error: "Bad Request 😏" });
		}
	} catch (error) {
		res.status(500).json({ error: "Server Error! Try Again Latter" });
	}
};

const messageUpdate = async (req, res) => {
	const { channelId, messageArray } = req.body;

	try {
		await channelModel.updateOne(
			{ _id: channelId },
			{ $push: { messages: messageArray } }
		);

		res.status(200).json({ message: "message update successfully 💚" });
	} catch (error) {
		res.status(500).json({ error: "Server Error! Try Again Latter" });
	}
};

module.exports = { createChannel, messageUpdate };
