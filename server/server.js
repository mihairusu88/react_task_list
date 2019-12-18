const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const tasksRouter = require('./routes/tasks')

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Successfully connected to database.')
    })
    .catch(() => {
        console.log('An error has occurred trying to connect to database.')
    });

app.use('/tasks', tasksRouter);

app.listen(process.env.PORT, process.env.HOST, function () {
    console.log(`Server is running on port ${process.env.PORT}`);
});