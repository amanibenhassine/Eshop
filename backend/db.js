const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect("mongodb+srv://amani:amani123@cluster0.jytlg.mongodb.net/eshop?retryWrites=true&w=majority", connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		
		console.log("Could not connect database!");
	}
};