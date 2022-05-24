const Book = require('../models/book.js')

async function deleteBook(req, res) {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(202).send(`Deleted book with id: ${req.params.id}`)
    } catch(err) {
        console.log(err)
    }
}

module.exports = deleteBook