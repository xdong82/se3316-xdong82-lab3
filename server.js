const express = require('express');
const bodyParser = require('body-parser');

const item = require('./routes/item.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://xdong82:3bAkrvlTsXCHWqVD@cluster0-pxsle.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/library', item);

let port = 27018;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

//password: 3bAkrvlTsXCHWqVD