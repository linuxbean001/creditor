const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    orderValue: {
        type: String,
        required: false
    },
    orderClient: {
        type: String,
        required: false
    },
    orderDate: {
        type: String,
        required: false
    },
    orderUnique: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('order', userSchema)
