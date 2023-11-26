//Connect with Mongodb Atlas
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sharifulbbb:1234567890@shariful.kvo5csg.mongodb.net/MongoAPITest?retryWrites=true&w=majority');
mongoose.connection.on('error', err => console.log(err));

//Initialize Express
const express = require('express');
const app = express();

//Set View Engine
app.set('view engine', 'ejs');

//Initialize Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Set route
app.get('/', (req, res) => res.render('index'));
app.use('/apiHw7CsI89Fak7w/mongo/user/', require('./api/mongo/routes/user_routes'));
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found!!!'
    })
});

module.exports = app;