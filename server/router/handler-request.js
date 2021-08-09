const utils = require('../utils/utils')
const Counter = require('../models/counterSchema')

// 查询 TODO: 不完善
const query = (utils) => {
  return (model) => {
    return async (ctx, fn) => {
      const res = await model.find({})
      const data = fn ? fn(res, utils) : res
      ctx.response.body = utils.resBody({ data })
    }
  }
}

// 详情
const detail = (utils) => {
  return (model) => {
    return async (ctx) => {
      const { id } = ctx.request.query
      const res = await model.findOne({ id })
      
      ctx.response.body = utils.resBody({ data: res })
    }
  }
}

// 新增
const create = (utils, Counter) => {
  return (model) => {
    return async (ctx) => {
      const menuData = ctx.request.body
  
      try {
        const res = await model.findOne({ title: menuData.title }, 'id title')
      
        if (res) {
          // 1.是否 title 已存在
          ctx.response.body = utils.resBody({
            code: '20001',
            message: `系统检测到该数据已存在!`
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
}

// 编辑
const edit = (utils) => {
  return (model) => {
    return async (ctx) => {
      const data = ctx.request.body
  
      try {
        const res = await model.updateOne({ id: data.id }, { $set: data })
        ctx.response.body = utils.resBody({ message: '编辑成功!' })
      } catch (error) {
        ctx.response.body = utils.resBody({
          code: '50000',
          message: error.message
        })
      }
    }
  }
}

// 删除
const del = (utils) => {
  return (model) => {
    return async (ctx) => {
      const { id } = ctx.request.query
  
      try {
        const res = await model.deleteOne({ id })
        ctx.response.body = utils.resBody({ message: '删除成功!' })
      } catch (error) {
        ctx.response.body = utils.resBody({
          code: '50000',
          message: error.message
        })
      }
    }
  }
}

module.exports = {
  detail: detail(utils),
  edit: edit(utils),
  del: del(utils),
  create: create(utils, Counter),
  query: query(utils)
}