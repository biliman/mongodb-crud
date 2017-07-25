const express = require('express');
let app = express();

// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// books
var book = require('./routes/books')
app.use('/books', book)

app.listen(3000);