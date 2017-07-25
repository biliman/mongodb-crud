const express = require('express');
var router = express.Router();
var booksController = require('../controllers/books');

router.get('/', booksController.getAllBooks)
router.get('/:id', booksController.getOneBook)
router.post('/', booksController.createBook)
router.delete('/:id', booksController.deleteBook)
router.put('/:id', booksController.updateBook)

module.exports = router