
export function resBody ({ data = {}, code = 200, message = 'success' }) {
  return JSON.stringify({
    code: code,
    message: message,
    data: data
  })
}

/**
 * 获取url上的参数
 * @param {string} url
 * @return {object} { key: value }
 */
export function getUrlParams (url) {
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