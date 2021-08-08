const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    'id': String,
    'title': String,
    'content': String,
    'content_short': String,
    'path': String,
    'anchor': String,
    'status': String,
    'image_uri': String,
    'createTime': Date,
    'remark': String
})

module.exports = mongoose.model('article', articleSchema, 'article')