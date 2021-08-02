const utils = require('../utils/utils')

// 文章列表
const articleList = {
  method: 'get',
  path: '/article/list',
  fn: (ctx) => {
    const { currentPage = 1, pageSize = 10, queryString } = utils.getUrlParams(ctx.request.url)
  
    let data = utils.operationFile('../mock/article.json')

    // 筛选
    if (queryString) {
      data = data.filter(item => {
        return item.title.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      })
    }

    const total = data.length
    const dataList = data.slice((currentPage - 1) * pageSize, pageSize * currentPage)
  
    ctx.response.body = utils.resBody({
      data: {
        data: dataList,
        total,
        currentPage,
        pageSize
      }
    })
  }
}

// 文章详情
const articleDetail = {
  method: 'get',
  path: '/article/detail',
  fn: (ctx) => {
    const { id } = utils.getUrlParams(ctx.request.url)
    
    let data = utils.operationFile('../mock/article.json')
    data = data.find(item => item.id === id) || {}

    ctx.response.body = utils.resBody({ data })
    
  }
}

// 文章创建
const articleCreate = {
  method: 'post',
  path: '/article/create',
  fn: (ctx) => {
    const article = ctx.request.body

    utils.operationFile('../mock/article.json', (data) => {
      // id 自增
      const id = data.length + 1
      article.id = id + ""

      data.unshift(article)
      return data
    })

    ctx.response.body = utils.resBody({ message: '创建文章成功' })
  }
}

// 文章编辑
const articleEdit = {
  method: 'put',
  path: '/article/edit',
  fn: (ctx) => {
    const article = ctx.request.body

    utils.operationFile('../mock/article.json', (data) => {
      data.forEach((item, index, arr) => {
        if (item.id === article.id) {
          arr[index] = article
        }
      })
      return data
    })

    ctx.response.body = utils.resBody({ message: '编辑文章成功' })
  }
}

// 文章删除
const articleDelete = {
  method: 'delete',
  path: '/article/delete',
  fn: (ctx) => {
    const { id } = utils.getUrlParams(ctx.request.url)

    utils.operationFile('../mock/article.json', (data) => {
      return data.filter(item => item.id !== id)
    })

    ctx.response.body = utils.resBody({ message: '删除成功' })

  }
}

module.exports = [
  articleList,
  articleDetail,
  articleCreate,
  articleEdit,
  articleDelete
]