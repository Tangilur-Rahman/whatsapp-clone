const express = require("express");

// create sub-router
const google = express.Router();

// own modules
const { googlePost } = require("../controller/googleController");

google.post("/", googlePost);

module.exports = google;
