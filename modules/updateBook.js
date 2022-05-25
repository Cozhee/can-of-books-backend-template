const Book = require('../models/book.js')

async function updateBook(req, res) {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options={overwrite:true, returnDocument: 'after'})
        res.status(200).send(updatedBook)
    } catch (err) {
        console.log(err)
    }
}

module.exports = updateBook