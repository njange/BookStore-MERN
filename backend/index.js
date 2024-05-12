import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'

const app = express();

//Middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});

// Route to saving a new book
app.post('/books', async (request, response) => {
    try{
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
    };
    const book = await Book.create(newBook);
    
    return response.status(201).send(book);

}catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to get all books from the Database
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({

            count: books.length,
            data: books,
        });

    } catch(error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

//Route to get one books from the Database using id

app.get('/books/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const book = await Book.findByid(id);

        return response.status(200).json(book);

    } catch(error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});

// Route for Updating a book

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to Database');
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })
