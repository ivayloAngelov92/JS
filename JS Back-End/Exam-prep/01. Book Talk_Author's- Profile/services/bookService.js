const Book = require('../models/Book.js');

async function getAll() {
	return Book.find({}).lean();
}

async function getById(id) {
	return Book.findById(id).lean();
}

async function create(book) {
	return Book.create(book);
}

async function deleteById(id) {
	return Book.findByIdAndDelete(id);
}

async function updateById (id, data)  {
    return Book.findByIdAndUpdate(id, data)};
// async function updatebyId(id, book) {
// 	const existing = await Book.findById(id);

// 	existing.title = book.title;
// 	existing.technique = book.technique;
// 	existing.picture = book.picture;
// 	existing.certificate = book.certificate;

// 	return existing.save();
// }

async function wish(id, userId) {
	const existing = await Book.findById(id);

	existing.wishingList.push(userId);
	
	return existing.save();
}

async function profile(userId) {
	return Book.find({ wishingList: userId }).lean();
}

module.exports = {
	getAll,
	getById,
	create,
	deleteById,
	updateById,
	wish,
	profile,
};
