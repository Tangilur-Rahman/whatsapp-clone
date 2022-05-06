const mongoose = require("mongoose");

mongoose
	.connect(process.env.CHAT_MODEL)
	.then(() => console.log(`database connect successfully`))
	.catch((error) => console.log(`chat-model ERROR: ${error.message}`));


module.exports = mongoose;