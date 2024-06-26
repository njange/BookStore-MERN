import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';

import bookRoute from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy
//Option 1: All all origins with Default cors(*)
app.use(cors());

//Option 2: Allow Custom Origins
app.get('/', (request, response) => {
   console.log(request);
   return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', bookRoute);

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
