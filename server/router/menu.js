const utils = require('../utils/utils')

function fetchData () {
  return utils.operationFile('../mock/menu.json')
}

function saveData (fn) {
  utils.operationFile('../mock/menu.json', fn)
}

// 文章索引目录
const menuList = {
  method: 'get',
  path: '/menu/list',
  fn: (ctx) => {
    let data = fetchData()
    data = utils.treeData(data) // 将数据转成树结构

    ctx.response.body = utils.resBody({
      data: { 
        menuList: data
      }
    })
  }
}

const menuDetail = {
  method: 'get',
  path: '/menu/detail',
  fn: (ctx) => {
    const { id } = utils.getUrlParams(ctx.request.url)
    const data = fetchData()

    const item = data.find(item => item.id === id) || null

    ctx.response.body = utils.resBody({
      data: item
    })
  }
}

const menuEdit = {
  method: 'put',
  path: '/menu/edit',
  fn: (ctx) => {
    const menuData = ctx.request.body

    saveData((data) => {
      data.forEach((item, index, arr) => {
        if (item.id === menuData.id) {
          arr[index] = Object.assign(arr[index], menuData)
        }
      })
      return data
    })

    ctx.response.body = utils.resBody({
      message: '编辑成功!'
    })
  }
}

const menuCreate = {
  method: 'post',
  path: '/menu/create',
  fn: (ctx) => {
    const menuData = ctx.request.body

    saveData((data) => {
      // TODO: 自增id
      const id = data.length + 1
      menuData.id = id + ''
      data.push(menuData)
      return data
    })

    ctx.response.body = utils.resBody({
      message: '新增成功!'
    })
  }
}

const menuDelete = {
  method: 'delete',
  path: '/menu/delete',
  fn: (ctx) => {
    const { id } = utils.getUrlParams(ctx.request.url)

    saveData((data) => {
      return data.filter(item => item.id !== id)
    })

    ctx.response.body = utils.resBody({
      data: id,
      message: '删除成功!'
    })
  }
}

module.exports = [
  menuList,
  menuDetail,
  menuEdit,
  menuCreate,
  menuDelete
]