# front-nuxtjs

## TODO

  - 动态更改页面标题
  - axios 配置拦截器
  - nuxt 客户端请求为什么那么慢

## 踩坑记录

### Q: 在 computed 计算属性（用来获取 store 中的属性）被重新赋值会报错
### A: 重写 computed 计算属性的 set 方法

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

