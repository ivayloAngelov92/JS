const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    hotel: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true,
        minLength: 5,
    },
    freeRooms: {
        type: String,
        required: true,
        minLength: 3,
    },
    imgUrl: {
        type: String,
        required: true,
        // validate: /^https?:\/\//i
    },
    wishingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

bookSchema.method('getWished', function () {
    return this.wishingList.map(x => x._id);
})


let Book = mongoose.model('Book', bookSchema);

module.exports = Book;