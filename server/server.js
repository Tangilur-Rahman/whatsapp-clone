const express = require("express");
require("dotenv").config();

// own modules
require("./config/connectDatabase");
const signup = require("./router/signup.router");

// main router
const app = express();

// insert request object
app.use(express.json());

// sub router
app.use("/signup", signup);

// 404 not found error
app.use((req, res) => {
	res.status(404).json({ error: "file not found" });
});

// custom error handler
app.use((error, req, res, next) => {
	if (error) {
		res.status(500).json({ error: error.message });
	} else {
		next();
	}
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server was running at ${PORT}`));
