'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const Book = require('./models/book.js')

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', async(req, res) => {
  const filterQuery = {}

  if (req.query.title) {
    filterQuery.title = req.query.title
  }

  const books = await Book.find(filterQuery)

  res.send(books)
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
