// const Mock = require('mockjs')

module.exports = [
  {
    title: 'javascript',
    key: 'javascript',
    hasContent: true,
    children: [
      {
        title: '闭包',
        hasContent: true,
        key: 'bi-bao'
      },
      {
        title: '原型链',
        hasContent: true,
        key: 'yuan-xing-lian'
      },
      {
        title: '事件循环',
        hasContent: true,
        key: 'event-loop'
      },
    ]
  },
  {
    title: 'css',
    key: 'css',
    hasContent: false,
    children: [
      {
        title: '盒模型',
        hasContent: true,
        key: '盒模型'
      },
      {
        title: 'BFC',
        hasContent: true,
        key: 'BFC'
      },
      {
        title: 'flex',
        hasContent: true,
        key: 'flex'
      },
    ]
  }
]
