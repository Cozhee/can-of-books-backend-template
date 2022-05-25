const Book = require('../models/book.js')

async function createBook(req, res) {
    console.log(req.body)
    try {
        const book = await Book.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        })
        res.status(200).send(book)
    } catch(err) {
        console.log(err)
    }
}

module.exports = createBook