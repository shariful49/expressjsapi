const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user_name: String,
    email: String,
    password: String,
    full_name: String,
    address: String,
    date_of_birth: Date,
    contact: Number,
    create_at:{
        type: Date,
        required: true,
        default: Date.now
    },
    // is_deleted: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    // }
});

module.exports = mongoose.model('User', userSchema);