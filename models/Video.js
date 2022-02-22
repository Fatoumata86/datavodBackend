const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	categorie: {
		type: String,
		categorie: true,
		trim: true,
	},
	video: {
		type: String,
		required: true,
	},
	description: String,
	releaseDate: {
		type: Date,
		required: true,
		default: Date.now,
	},
	viewsNumbers: {
		type: Number,
		required: true,
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
