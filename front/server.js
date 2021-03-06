// nodejs服务器
const express = require("express");
const Vue = require("vue");
const fs = require('fs')

const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });

global.window = dom.window;
global.window.Date = Date;
global.document = window.document;
// global.navigator = window.navigator;

// 创建express实例和vue实例
const app = express();
// 创建渲染器
const {createBundleRenderer} = require("vue-server-renderer");
const serverBundle = require('./dist/server/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/client/vue-ssr-client-manifest.json');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: fs.readFileSync('./src/index.template.html', 'utf-8'), // 宿主模板文件
    clientManifest
})

// 中间件处理静态文件请求
app.use(express.static('./dist/client', {index: false}))

// 路由处理交给vue
app.get("*", async (req, res) => {
  try {
      const context = {
          url: req.url,
          title: 'ssr test',
          metas: `
              <meta name="keyword" content="vue,ssr">
              <meta name="description" content="vue srr demo">
          `,
      }

    const html = await renderer.renderToString(context);
    res.send(html);
  } catch (error) {
    console.log('error:', error)
    res.status(500).send("服务器内部错误");
  }
});

app.listen(3000, () => {
  console.log("渲染服务器启动成功：http://localhost:3000");
});
