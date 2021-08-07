const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
  'userId': String,
  'username': String
})

module.exports = mongoose.model('article', articleSchema, 'article')