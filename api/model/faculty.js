const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const facultySchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    gender:String
});

module.exports = mongoose.model('Faculty', facultySchema);