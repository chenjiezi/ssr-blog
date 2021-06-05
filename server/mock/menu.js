// const Mock = require('mockjs')

module.exports = [
  {
    title: 'javascript',
    key: 'javascript',
    scopedSlots: { title: 'title' },
    children: [
      {
        title: '闭包',
        link: 'bi-bao',
        scopedSlots: { title: 'title' },
        key: '闭包'
      },
      {
        title: '原型链',
        scopedSlots: { title: 'title' },
        key: '原型链'
      },
      {
        title: '事件循环',
        scopedSlots: { title: 'title' },
        key: '事件循环'
      },
    ]
  },
  {
    title: 'css',
    key: 'css',
    children: [
      {
        title: '盒模型',
        scopedSlots: { title: 'title' },
        key: '盒模型'
      },
      {
        title: 'BFC',
        scopedSlots: { title: 'title' },
        key: 'BFC'
      },
      {
        title: 'flex',
        scopedSlots: { title: 'title' },
        key: 'flex'
      },
    ]
  }
]
