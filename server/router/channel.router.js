const express = require("express");

// create sub-router
const channel = express.Router();

// own modules
const {
	createChannel,
	messageUpdate,
	getMessages
} = require("./../controller/channelController");
const verifyUser = require("./../config/verifyUser");

const channelModel = require("./../model/channelModel");

channel.get("/", verifyUser, (req, res) => {

	const currentUser = req.verifiedUserCustom || req.verifiedUserGoogle;

	res.status(200).json(currentUser);
});

channel.post("/", createChannel);

channel.get("/messages", async(req,res)=>{

	const senderEmail = req.body;
	const document = await channelModel.find({email : senderEmail})

	res.status(200).json(document);

})

channel.put("/", messageUpdate);

module.exports = channel;
