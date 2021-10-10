const express = require('express');

const router = express.Router();

const bookController = require('../controller/book');

router.post('/addBook', bookController.addBook);
router.get('/getAllbooks', bookController.getAllBooks);
router.get('/getBook/:bookId', bookController.getBook)
router.put('/editBook/:bookId', bookController.editBook);
router.delete('/deleteBook/:bookId', bookController.deleteBook)
module.exports = router;
