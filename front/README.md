# front
front 项目暂停开发，卡在项目构建上。 - 2021/6/10

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 问题
### ant-design 按需引入，打包后启动服务，报错
```js
import '../../style/index.css'; 
^^^^^^ SyntaxError: Cannot use import statem
```