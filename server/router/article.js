const utils = require('../utils/utils')
const Article = require('../models/articleSchema')
const req = require('./handler-request')

const { query, detail, create, edit, del } = req

const articleList = { method: 'get', path: '/article/list', fn: query(Article) }
const articleDetail = { method: 'get', path: '/article/detail', fn: detail(Article) }
const articleCreate = { method: 'post', path: '/article/create', fn: create(Article, 'articleId') }
const articleEdit = { method: 'put', path: '/article/edit', fn: edit(Article) }
const articleDelete = { method: 'delete', path: '/article/delete', fn: del(Article) }

module.exports = [
  articleList,
  articleDetail,
  articleCreate,
  articleEdit,
  articleDelete
]