const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Invalid Email");
				}
			}
		},
		password: {
			type: String,
			required: true,
			min: [8, "password must be in 8 letters"]
		},
		profilePic: {
			type: String,
			default: "assets/profile/defaultProfile.png"
		}
	},

	{ timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
