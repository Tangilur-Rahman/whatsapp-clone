const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
	{
		chatName: {
			type: String,
			trim: true
		},
		isGroupChat: {
			type: Boolean,
			enum: [true, false],
			default: false
		},
		users: [
			{
				type: mongoose.Types.ObjectId,
				ref: "user"
			}
		],
		latestMessage: {
			type: mongoose.Types.ObjectId,
			ref: "message"
		},

		groupAdmin: {
			type: mongoose.Types.ObjectId,
			ref: "user"
		}
	},

	{
		timestamps: true
	}
);

const chatModel = mongoose.model("chat", chatSchema);

module.exports = chatModel;
