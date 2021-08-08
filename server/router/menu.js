const utils = require('../utils/utils')
const Menu = require('../models/menuSchema')
const Counter = require('../models/counterSchema')

// 文章索引目录
const menuList = {
  method: 'get',
  path: '/menu/list',
  fn: async (ctx) => {
    const res = await Menu.find({})
    const data = utils.treeData(res) // 转成树结构
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
  fn: async (ctx) => {
    const { id } = ctx.request.query

    const res = await Menu.findOne({ id })
    
    ctx.response.body = utils.resBody({
      data: res
    })
  }
}

const menuEdit = {
  method: 'put',
  path: '/menu/edit',
  fn: async (ctx) => {
    const menuData = ctx.request.body

    try {
      Menu.updateOne({ id: menuData.id }, { $set: menuData })
      ctx.response.body = utils.resBody({message: '编辑成功!' })
    } catch (error) {
      ctx.response.body = utils.resBody({
        code: '50000',
        message: error.message
      })
    }
  }
}

const menuCreate = {
  method: 'post',
  path: '/menu/create',
  fn: async (ctx) => {
    const menuData = ctx.request.body

    try {
      const res = await Menu.findOne({ title: menuData.title }, 'id title')
    
      if (res) {
        // 1.是否 title 已存在
        ctx.response.body = utils.resBody({
          code: '20001',
          message: `系统检测到有重复的标题索引，信息如下： ${res.id} - ${res.title}`
        })
      } else {
        // 2.生成id
        const doc = await Counter.findOneAndUpdate(
          { _id: 'menuId' },
          { $inc: { sequence_value: 1 } },
          { new: true }
        )
        // 3.插入数据库
        const menu = new Menu({
          id: doc.sequence_value,
          ...menuData
        })
        menu.save()
        ctx.response.body = utils.resBody({ message: '新增成功!' })
      }
    } catch (error) {
      ctx.response.body = utils.resBody({
        code: '50000',
        message: error.message
      })
    }

  }
}

const menuDelete = {
  method: 'delete',
  path: '/menu/delete',
  fn: async (ctx) => {
    const { id } = ctx.request.query

    try {
      const res = await Menu.deleteOne({ id })
      ctx.response.body = utils.resBody({ message: '删除成功!' })
    } catch (error) {
      ctx.response.body = utils.resBody({
        code: '50000',
        message: error.message
      })
    }
  }
}

module.exports = [
  menuList,
  menuDetail,
  menuEdit,
  menuCreate,
  menuDelete
]