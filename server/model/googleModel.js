const mongoose = require("mongoose");

const googleSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		profilePic: {
			type: String,
			default: "assets/profile/defaultProfile.png"
		}
	},

	{ timestamps: true }
);

const googleModel = mongoose.model("login-with-google", googleSchema);

module.exports = googleModel;
