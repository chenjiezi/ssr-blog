
/**
 * 查找树结构数据中子节点的父节点（包括爷爷、姥爷...）
 * @param {TreeList} data 树结构的数据
 * @param {String} target 子节点的值
 * @param {String} key 子节点的健 ([key, value]中的 key，默认健为'key')
 * @return {Array} 子节点的父节点集合
 */
export const TreeDataFindParents = (data, target, key = 'key') => {
  let result = []

  const dfs = (data, target, path) => {
    for (let item of data) {
      if (item[key] === target) {
        result = [...path] // 浅拷贝
        break;
      }
      if (item?.children?.length > 0) {
        path.push(item[key])
        dfs(item.children, target, path)
        path.pop()
      }
    }
  }
  
  dfs(data, target, [])

  return result
}

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