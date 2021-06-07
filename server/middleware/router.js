const Router = require('koa-router')
const path = require('path')

const router = new Router()

router.get('/', async (ctx) => {
  ctx.type = 'html'
  ctx.body = '<h1>你好，菜鸟！</h1>'
})

router.get('/api/menu', async (ctx) => {
  const filePath = path.join(__dirname, '../menu.js')

  try {
    const data = await require(filePath)
    ctx.response.body = JSON.stringify({
      code: 200,
      message: 'success',
      data: {
        menuList: data
      }
    })
  } catch (error) {
    ctx.response.body = JSON.stringify(error)
  }
})

router.get('/api/article', (ctx) => {
  // const filePath = path.join(__dirname, '../menu.js')
  ctx.response.body = JSON.stringify(ctx)
})


module.exports = router