const path = require('path')
const Mock = require('mockjs')
const Router = require('koa-router')
const utils = require('../utils/utils')

const router = new Router()

router.get('/', async (ctx) => {
  ctx.type = 'html'
  ctx.body = '<h1>你好，菜鸟！</h1>'
})

const ln = 'admin'
const pw = '123456'

// 登录
router.post('/api/login', async (ctx) => {
  const { username, password } = ctx.request.body
  if (username === ln && password === pw) {
    ctx.response.body = utils.resBody({ data: {
      token: 'asdiu2h08d029nd'
    } })
  } else {
    ctx.response.body = utils.resBody({}, 201, '账号或密码错误!')
  }
})

// 文章目录
router.get('/api/menu', async (ctx) => {

  const data = utils.operationFile('../mock/menu.json')

  ctx.response.body = utils.resBody({ data: { 
    menuList: data
  }})

})

// 文章列表
router.post('/api/article/list', async (ctx) => {
  const { currentPage = 1, pageSize = 10 } = ctx.request.body

  const data = utils.operationFile('../mock/article.json')
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

})

// 文章详情
router.post('/api/article/detail', async (ctx) => {
  const { id } = ctx.request.body
  
  let data = utils.operationFile('../mock/article.json')
  data = data.find(item => item.id === id) || {}

  ctx.response.body = utils.resBody({ data })
  
})

// 文章创建
router.post('/api/article/create', async (ctx) => {
  const article = ctx.request.body

  utils.operationFile('../mock/article.json', (data) => {
    // id 自增
    const id = data.length + 1
    article.id = id + ""

    data.unshift(article)
    return data
  })

  ctx.response.body = utils.resBody({ message: '创建文章成功' })
})

// 文章编辑
router.put('/api/article/edit', async (ctx) => {
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
})

// 文章删除
router.post('/api/article/delete', async (ctx) => {
  const { id } = ctx.request.body

  utils.operationFile('../mock/article.json', (data) => {
    return data.filter(item => item.id !== id)
  })

  ctx.response.body = utils.resBody({ message: '删除文章成功' })

})

module.exports = router