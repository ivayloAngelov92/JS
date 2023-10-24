const mongoose = require('mongoose');
const IMAGEURL_PATTERN = /^https?:\/\/.+$/i;
const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required'],
		minLength: [2, 'The Title should be a minimum of 6 characters long'],
	},
	author: {
		type: String,
		required: [true, 'Author technique is required'],
		minLength: [5, 'Author min 5 characters long'],
	},
	image: {
		type: String,
		required: [true, 'picture is required'],
		match: [IMAGEURL_PATTERN, 'The Art picture should start with http:// or https://']
		// validate: {
		// 	validator: (value) => IMAGEURL_PATTERN.test(value), // enum по регЕх
		// 	message: 'Invalid URL',
		// },
	},
	review: {
		type: String,
		required: [true, 'Please give a review'],
		minLength:[10, 'Review should be a minimum of 10 characters']
	},
	genre:{
		type: String,
		required: [true, 'Please specify the genre'],
		minLength: [3, 'Minimum 3 symbols'],
	},
	stars:{
		type: Number,
		required: [true, 'Number of stars is required'],
		min: [1, 'Minimum value must be at least 1'],
		max: [5, 'Maximum value must be at most 5'],
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	// could be dotation any clicks user has done
	wishingList: {
		type: [mongoose.Types.ObjectId],
		ref: 'User',
	},
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;