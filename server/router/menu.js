const utils = require('../utils/utils')

// 文章索引目录
const menuList = {
  method: 'get',
  path: '/menu/list',
  fn: (ctx) => {
    const data = utils.operationFile('../mock/menu.json')

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
  fn: (ctx) => {}
}

const menuEdit = {
  method: 'put',
  path: '/menu/edit',
  fn: (ctx) => {}
}

const menuCreate = {
  method: 'post',
  path: '/menu/create',
  fn: (ctx) => {}
}

const menuDelete = {
  method: 'delete',
  path: '/menu/delete',
  fn: (ctx) => {}
}


module.exports = [
  menuList,
  menuDetail,
  menuEdit,
  menuCreate,
  menuDelete
]