var MongoClient = require('mongodb').MongoClient;
// connection URL
var url = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectId;


function getAllBooks(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.send(`Can't Connect to Database : ${err.message}`)
    } else {
      db.collection('books').find({}).toArray(function (err, docs) {
        if (err) {
          res.send(err.message)
        } else {
          res.send(docs)
        }
        db.close();
      })
    }
  })
}

function getOneBook(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      res.send(`Can't Connect to Database : ${err.message}`)
    } else {
      db.collection('books').find({_id: ObjectId(req.params.id)}).toArray((err, docs) => {
        if (err) {
          res.send(err.message)
        } else {
          res.send(docs)
        }
        db.close();
      })
    }
  })
}

function createBook(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      res.send(`Can't Connect to Database : ${err.message}`)
    } else {
      db.collection('books').insert({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: Number(req.body.stock)
      }, (err, docs) => {
        if (err) {
          res.send(err.message)
        } else {
          res.send(docs)
        }
        db.close();
      }) 
    }
  })
}

function deleteBook(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      res.send(`Can't Connect to Database : ${err.message}`)
    } else {
      db.collection('books').deleteOne({_id: ObjectId(req.params.id)}, (err, docs) => {
        if (err) {
          res.send(err.message)
        } else {
          res.send('Delete Book Succesfully')
        }
        db.close();
      })
    }
  })
}

function updateBook(req, res, next) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      res.send(`Can't Connect to Database : ${err.message}`)
    } else {
      db.collection('books').update({_id: ObjectId(req.params.id)},{
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: Number(req.body.stock)
      }, (err, docs) => {
        if (err) {
          res.send(err.message)
        } else {
          res.send(docs)
        }
      })
    }
  })
}

module.exports = {getAllBooks, getOneBook, createBook, deleteBook, updateBook}
