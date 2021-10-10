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
      // since, we are inside async block, throwing error will not work
      next(error);
    
    }
    
};

