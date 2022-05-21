const mongoose = require("mongoose");

const channelScheme = mongoose.Schema(
	{
		channelUsers: [
			{
				name: { type: String },
				email: { type: String },

				profilePic: {
					type: String,
					default: "assets/profile/defaultProfile.png"
				}
			}
		],

		messages: [
			{
				receiverEmail: { type: String, default: "" },

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
