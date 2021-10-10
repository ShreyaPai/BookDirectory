const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookRoute = require('./routes/book.route');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/book', bookRoute);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

const MongoDb_URI = "mongodb+srv://root:root@cluster0.lp5zl.mongodb.net/books";

mongoose.connect(MongoDb_URI).then((result) => {
    console.log('DB Connected!!')
    app.listen(8080);
}).catch((err) => console.log(err));


