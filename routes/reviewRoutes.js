const express = require("express");
const { addReview, getReviews } = require("../controllers/reviewController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/books/:id/reviews", authMiddleware, addReview);
router.get("/books/:id/reviews", getReviews);

module.exports = router;
