require('./mongodbconnection');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const studentRouter = require('./api/routes/student');
const facultyRouter = require('./api/routes/faculty');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.render('index', {

    })
});
app.use('/student', studentRouter);
app.use('/faculty', facultyRouter);
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Bad Request!!!'
    })
});

module.exports = app;