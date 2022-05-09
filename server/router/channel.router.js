const express = require("express");

// create sub-router
const channel = express.Router();

// own modules
const {
	createChannel,
	messageUpdate
} = require("./../controller/channelController");
const verifyToken = require("./../config/verifyToken");

channel.get("/",verifyToken,async(req,res)=>{

	res.status(200).json(req.verifiedUser);
});

channel.post("/", createChannel);

channel.put("/", messageUpdate);

module.exports = channel;
