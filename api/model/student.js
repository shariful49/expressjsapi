const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    gender:String,
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    address: [
        {
            house: String,
            road: Number,
            upazila: String,
            dist: String,
            division: String
        }
    ]
});

module.exports = mongoose.model('Student', studentSchema);