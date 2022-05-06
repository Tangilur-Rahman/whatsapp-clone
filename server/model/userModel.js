const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique : true,
			validate(value){
				
				
				if(!validator.isEmail(value)){
					throw new Error("Invalid Email")
				}
			}

		},
		password: {
			type: String,
			required: true,
			min : [8,"password must be in 8 letters"]

		},
		picture: {
			type: String,
			default: "assets/public/default.png"
		}
	},
	{ timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
