const Book = require("../models/book");

async function getBook(req, res) {
    const filterQuery = {}
    if (req.query.title) {
        filterQuery.title = req.query.title
    }
    const books = await Book.find(filterQuery)
    res.send(books)
}

module.exports = getBook