const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    userAddress: {
        type: String,
        require: true,
        min: 6,
        max: 255,
    },
    email: {
        type: String,
        require: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        require: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model('Auth', authSchema);