const Vue = require('vue')
const server = require('express')()

const template = require('fs').readFileSync('./index.template.html', 'utf-8')

const renderer = require('vue-server-renderer').createRenderer({
  template,
})

const context = {
  title: 'vue ssr',
  metas: `
    <meta name="keyword" content="vue,ssr">
    <meta name="description" content="vue ssr demo">
  `,
}

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是：{{ url }}</div>`,
  })
  
  renderer.renderToString(app, context).then(html => {
    res.end(html)
  }).catch(err => {
    res.status(500).end('Internal Server Error')
    console.log(err)
  })
})

server.listen(8080)

