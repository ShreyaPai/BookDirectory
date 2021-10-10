const express = require('express');

const router = express.Router();

const bookController = require('../controller/book')
router.post('/addBook', bookController.addBook);

module.exports = router;
