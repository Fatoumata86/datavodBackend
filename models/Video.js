const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	video: {
		type: String,
		required: true,
	},
	description: String,
	viewsNumbers: {
		type: Number,
	},
	notes: {
		likes: {
			type: Number,
		},
		dislikes: {
			type: Number,
		},
	},
	userId: {
		type: String,
		index: true,
		required: true,
	},
});

module.exports = mongoose.model("Video", videoSchema);
