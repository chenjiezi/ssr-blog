const Menu = require('../models/menuSchema')
const req = require('./handler-request')

const { query, create, detail, edit, del } = req

const menuList = { method: 'get', path: '/menu/list', fn: query(Menu, (res, utils) => {
  return utils.treeData(JSON.parse(JSON.stringify(res))) // 转成树结构
})}
const menuDetail = { method: 'get', path: '/menu/detail', fn: detail(Menu) }
const menuEdit = { method: 'put', path: '/menu/edit', fn: edit(Menu) }
const menuCreate = { method: 'post', path: '/menu/create', fn: create(Menu) }
const menuDelete = { method: 'delete', path: '/menu/delete', fn: del(Menu) }

module.exports = [
  menuList,
  menuDetail,
  menuEdit,
  menuCreate,
  menuDelete
]