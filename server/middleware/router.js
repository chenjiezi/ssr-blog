const path = require('path')
const Mock = require('mockjs')
const Router = require('koa-router')

const router = new Router()

router.get('/', async (ctx) => {
  ctx.type = 'html'
  ctx.body = '<h1>你好，菜鸟！</h1>'
})

const ln = 'admin'
const pw = '123456'

// 登录
router.post('/api/login', async (ctx) => {
  const { loginname, password } = ctx.request.body
  if (loginname === ln && password === pw) {
    ctx.response.body = resBody({ token: 'asdiu2h08d029nd' }, '登录成功!')
  } else {
    ctx.response.body = resBody({}, 201, '账号或密码错误!')
  }
})

// 文章目录
router.get('/api/menu', async (ctx) => {
  const filePath = path.join(__dirname, '../mock/menu.js')

  try {
    const menuList = await require(filePath)
    ctx.response.body = resBody({ menuList })
  } catch (error) {
    ctx.response.body = JSON.stringify(error)
  }
})

// 文章列表
router.post('/api/article', async (ctx) => {
  const params = ctx.request.body
  let curPage = params.page
  let pageSize = 10
  let total = 888

  pageSize = t(curPage - 1, total, pageSize)
  const articleList = mockList(pageSize)

  ctx.response.body = resBody({
    articleList: articleList,
    curPage,
    pageSize,
    total
  })
})

// 文章详情
router.post('/api/article-detail', async (ctx) => {
  const { title } = ctx.request.body
  
  ctx.response.body = resBody({
    content: `${title} - content`,
    anchors: ['小标题A', '小标题B', '小标题C', '小标题D']
  })
})

function resBody (data, code = 200, message = 'success') {
  return JSON.stringify({
    code: code,
    message: message,
    data: data
  })
}

// mock articleList
function mockList (pageSize) {
  const result = []
  for (let i = 0; i < pageSize; i++) {
    result.push(Mock.mock({
      id: '@id',
      title: '@ctitle(20, 50)',
      dateTime: '@date',
      summary: '@cparagraph(5)',
      path: 'bi-bao',
      anchor: ['标题1', '标题2', '标题3'],
      status: 1,
      cover: '', 
      remark: ''
    }))
  }

  return result
}

// 计算当前页的 pageSize
function t (curPage, total, pageSize) {
  let q = curPage * pageSize,
    s = q + pageSize

  if (q < total) {
    if (s >= total) {
      pageSize = total - q
    }
  } else {
    pageSize = 0
  }

  return pageSize
}

module.exports = router