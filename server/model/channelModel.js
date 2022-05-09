const mongoose = require("mongoose");

const channelScheme = mongoose.Schema(
	{
		channelUsers: [
			{
				user_id: { type: String, required: true },

				name: { type: String, required: true },

				profilePic: {
					type: String,
					default: "assets/profile/defaultProfile.png"
				}
			}
		],
		messages: [
			{
				senderID: { type: String, required: true },

				message: { type: String, default: "" },

				addedOn: { type: Number, default: Date.now() }
			}
		]
	},

	{
		timestamps: true
	}
);

const channelModel = mongoose.model("channel", channelScheme);

module.exports = channelModel;
