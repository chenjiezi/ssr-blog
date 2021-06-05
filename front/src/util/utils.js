
/**
 * 存储本地数据
 * @param {String} key local key
 * @param {Json} value local value
 */
export const setLocalData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 获取本地数据
 * @param {String} key local key
 */
export const getLocalData = (key) => {
  const json = localStorage.getItem(key)
  return JSON.parse(json)
}