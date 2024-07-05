const Book = require('../models/book');

const addBook = async (req, res) => {
    const { title, author, genre } = req.body;
    const coverImage = req.file ? req.file.path : null;
    try {
        const book = new Book({ title, author, genre, coverImage });
        await book.save();
        res.status(201).json({ message: 'Book added successfully', book });
    } catch (error) {
        res.status(400).json({ message: 'Error adding book', error });
    }
};

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching books', error });
    }
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    try {
        const book = await Book.findByIdAndUpdate(id, { title, author, genre }, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book updated successfully', book });
    } catch (error) {
        res.status(400).json({ message: 'Error updating book', error });
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting book', error });
    }
};

module.exports = { addBook, getBooks, updateBook, deleteBook };
