const { resolve } = require('path')
const { readFileSync, writeFileSync } = require('fs')

/**
 * 操作文件
 * @param {string} path 文件路径
 * @param {function} fn 回调函数
 */
function operationFile (path, fn) {
  if (!fn) {
    return readFile(path)
  }

  let data = readFile(path)

  data = fn(data)

  writeFile(path, data)
}

function readFile (path) {
  const f = resolve(__dirname, path)
  return JSON.parse(readFileSync(f, 'utf-8') || [])
}

function writeFile (path, data) {
  if (data) {
    const f = resolve(__dirname, path)
    writeFileSync(f, JSON.stringify(data))
  }
}

module.exports = {
  operationFile,

  /**
   * http 实体
   * @param {Object} param0 http body
   */
  resBody: function ({ data = {}, code = 200, message = 'success' }) {
    return JSON.stringify({
      code: code,
      message: message,
      data: data
    })
  },

  /**
   * 获取url上的参数
   * @param {string} url
   * @return {object} { key: value }
   */
  getUrlParams: function (url) {
    let res = {}
    let paramStr = url.split('?')[1] || ''
    let keyValArr = paramStr ? paramStr.split('&') : []
  
    keyValArr.forEach(kv => {
      if (!kv) return
      const [ k, v = '' ] = kv.split('=')
      res[k] = v
    })
  
    return res
  }
}