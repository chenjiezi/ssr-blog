# srr-blog

PS：front文件夹现在还是半成品，忽略即可

## 项目启动

### 后端服务 - admin文件夹

```bash

npm install
npm run serve
```

### blog - front-nuxtjs文件夹

```bash
npm install
npm run dev
```

### blog admin - admin文件夹

```bash
npm install
npm run dev
```

## 问题
### 操作完数据库要 await，不然没有操作数据库？
```js
const menuDelete = {
  method: 'delete',
  path: '/menu/delete',
  fn: async (ctx) => {
    const { id } = ctx.request.query

    try {
      // TODO: 这里
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
```
### treeData函数有bug
### menu的删除功能，当删除的索引有children，如何处理？
方案一：还有children的索引才可以删除
方案二：删除索引，那么它的children一起删除（否则子索引数据会成为无用的冗余数据）
### 自增id的问题
答：mongodb没有自增id的特性，所以需要自己去实现自增id的操作
用一个文档来管理id的自增
### 练习操作数据库
查询 - 条件查询、分页查询
新增 - 新增数据（自增id）
编辑 - 编辑数据（带id） 完成
删除 - 删除数据（带id） 完成

自增id
分页查询 query.skin(10).limit(10)

### Mongo语法
```bash
// 新增文档
db.collection.insertOne({})
db.collection.insertMany([])
// 查看文档
db.collection.find({})
// 删除文档
db.collection.deleteOne()
db.collection.deleteMany()
// 更新文档
db.collection.update({},{},false,true) // 条件，更新的数据，false表示查不到是否插入新的文档，true是批量
// 条件操作
大于 $gt
小于 $lt
大于等于 $gte
小于等于 $lte
```