'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 3001;
const createBook = require('./modules/createBook.js')
const getBook = require('./modules/getBook.js')
const deleteBook = require('./modules/deleteBook.js')
const updateBook = require('./modules/updateBook.js')

mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// Gets a book based on title
app.get('/books', getBook)

// Creates a book on the mongoDB
app.post('/books', createBook)

// Deletes a book based on the id of the object
app.delete('/books/:id', deleteBook)

// Updates a book object in the db
app.put('/books/:id', updateBook)

app.listen(PORT, () => console.log(`listening on ${PORT}`));
