const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sharifulbbb:1234567890@shariful.kvo5csg.mongodb.net/University?retryWrites=true&w=majority');
mongoose.connection.on('error', err => {
    console.log('Connection Failed');
});
mongoose.connection.on('connected', connected => {
    console.log('Connect With Database')
});
