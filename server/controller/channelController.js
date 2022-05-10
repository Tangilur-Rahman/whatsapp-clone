// own modules
const channelModel = require("./../model/channelModel");

// for /channel post
const createChannel = async (req, res) => {
	const [sender, receiver] = req.body;

	try {
		if (sender && receiver) {
			const document = await channelModel({
				channelUsers: []
			});

			document.channelUsers = [].concat(sender, receiver);

			await document.save();

			res.status(200).json(document);
		} else {
			res.status(400).json({ error: "Bad Request 😏" });
		}
	} catch (error) {
		res.status(500).json({ error: "Server Error! Try Again Latter" });
	}
};

// const getMessages =
const messageUpdate = async (req, res) => {
	const { senderEmail, messageObj } = req.body;

	try {
		await channelModel.updateOne(
			{ senderEmail },
			{ $push: { messages: messageObj } }
		);

		res.status(200).json({ message: "message update successfully 💚" });
	} catch (error) {
		res.status(500).json({ error: "Server Error! Try Again Latter" });
	}
};

module.exports = { createChannel, messageUpdate };
