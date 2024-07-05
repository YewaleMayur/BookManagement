const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reviewText: { type: String, required: true },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
