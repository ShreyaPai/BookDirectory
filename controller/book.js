const Book = require('../models/book');
exports.addBook = async (req, res, next) => {
  try {
    console.log(req.body);
    const title = req.body.title;
    const author = req.body.author;
    const summary = req.body.summary;
    const datePublished = req.body.datePublished;

    const book = new Book({
      title: title,
      author: author,
      summary: summary,
      datePublished: datePublished,
    });
    const bookAdded = await book.save();
    res.status(201).json({
      message: "Book Added",
      book: book,
    });
  } catch (error) {
    if (!error.statusCode) {
        error.statusCode = 500;
      }
      console.log(error)
      next(error);
    
    }
    
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      message: 'List of Books',
      books: books
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    console.log(error)
    next(error);
  }
}

exports.getBook = async (req, res, next) => {
  const bookId = req.params.bookId;
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      const err = new Error('Book Not Found');
      const status = '404';
      throw err;
    }
    res.status(200).json({
      message: 'Book Found',
      book: book
    })
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    console.log(error)
    next(error);
  }
}