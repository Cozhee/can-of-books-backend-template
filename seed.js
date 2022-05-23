require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)

const Book = require('./models/book.js')

async function seed() {
    await Book.create({
            title: 'Harry Potter',
            description: 'Magically magic',
            status: 'read'
    })
    console.log('Harry Potter was added.')
    await Book.create({
        title: 'Star Wars',
        description: 'The Force Is Strong',
        status: 'not-read'
    })
    console.log('Star Wars was added.')
    await Book.create({
        title: 'The Matrix',
        description: 'Unbelievable physics',
        status: 'read'
    })
    console.log('The Matrix was added.')

    mongoose.disconnect()
}

seed()