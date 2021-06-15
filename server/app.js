const Koa = require('koa')

const log = require('log4js').getLogger('Mock Server');
log.level = 'info';

const app = new Koa()

const respDurationMiddleware = require('./middleware/duration')
const respHeaderMiddleware = require('./middleware/header')
// const respDataMiddleware = require('./middleware/data')
const router = require('./middleware/router')

// 第一层中间件：计算服务器相应耗时
app.use(respDurationMiddleware)
// 第二层中间件：设置响应头部header
app.use(respHeaderMiddleware)
// 第三层中间件：处理业务逻辑
// app.use(respDataMiddleware)

app.use(router.routes())
app.use(router.allowedMethods())

// 启动服务
app.listen('8888', () => {
  log.info('Welcome to Koa')
  log.info('Listening on port 8888')
})