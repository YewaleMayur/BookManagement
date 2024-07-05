const express = require("express");
const {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

router.post("/books", authMiddleware, upload.single("coverImage"), addBook);
router.get("/books", getBooks);
router.put("/books/:id", authMiddleware, updateBook);
router.delete("/books/:id", authMiddleware, deleteBook);

module.exports = router;
