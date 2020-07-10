const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  profileUrl: {
    type: String,
    required: false
  },
  street1: {
    type: String,
    required: false
  },
  street2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  zipCode: {
    type: String,
    required: false
  },
  timeZone: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model('CustomerUser', userSchema)
