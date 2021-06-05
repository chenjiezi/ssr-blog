const path = require('path')
const fileUtil = require('../util/file-util')

module.exports = async (ctx, next) => {
  const url = ctx.request.url
  let filePath = url.replace('/api', '')
  filePath = `../mock${filePath}.js`
  filePath = path.join(__dirname, filePath)
  
  console.log('请求地址：', url)

  try {
    // const ret = await fileUtil.getFileJsonData(filePath)
    const ret = await require(filePath)
    ctx.response.body = JSON.stringify({
      code: 200,
      message: 'success',
      data: {
        menuList: ret
      }
    })
  } catch (error) {
    ctx.response.body = JSON.stringify(error)
  }

  await next()
  // let filePath = path.join(__dirname, '../data')
}