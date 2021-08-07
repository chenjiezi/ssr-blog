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