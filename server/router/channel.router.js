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

channel.get("/", verifyUser, async (req, res) => {
	const currentUser = req.verifiedUserCustom || req.verifiedUserGoogle;
	
	const document = await channelModel.findOne({
		"channelUsers[0].email": currentUser.email,
		"channelUsers[1].email": req.query.email
	});

	

	res.status(200).json(document);
});

channel.post("/", createChannel);

channel.get("/messages", verifyUser, async (req, res) => {
	const document = await channelModel.findOne({
		"channelUsers.email": req.query.email
	});

	res.status(200).json(document);
});

channel.put("/", messageUpdate);

module.exports = channel;
