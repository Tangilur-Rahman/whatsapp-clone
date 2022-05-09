const express = require("express");

// create sub-router
const channel = express.Router();

// own modules
const {
	createChannel,
	messageUpdate
} = require("./../controller/channelController");
const verifyUser = require("./../config/verifyUser");

channel.get("/", verifyUser, (req, res) => {
	res.status(200).json(req.verifiedUserCustom);
});
channel.post("/", createChannel);

channel.put("/", messageUpdate);

module.exports = channel;
