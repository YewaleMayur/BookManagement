const Review = require('../models/review');

const addReview = async (req, res) => {
    const { id } = req.params;
    const { reviewText } = req.body;
    const userId = req.user.userId;
    try {
        const review = new Review({ book: id, user: userId, reviewText });
        await review.save();
        res.status(201).json({ message: 'Review added successfully', review });
    } catch (error) {
        res.status(400).json({ message: 'Error adding review', error });
    }
};

const getReviews = async (req, res) => {
    const { id } = req.params;
    try {
        const reviews = await Review.find({ book: id }).populate('user', 'username');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching reviews', error });
    }
};

module.exports = { addReview, getReviews };
