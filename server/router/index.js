const Router = require('koa-router')
const router = new Router()

const commonRouter = require('./common')
const articleRouter = require('./article')
const menuRouter = require('./menu')

router.prefix('/api')

const routers = [
  commonRouter,
  articleRouter,
  menuRouter
]

routers.forEach(r => {
  r.reduce((pre, { method, path, fn }) => {
    pre[method](path, fn)
    return pre
  }, router)
})

module.exports = router