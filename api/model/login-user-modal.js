const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    },
    CreateDate: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Login_user', userSchema)
