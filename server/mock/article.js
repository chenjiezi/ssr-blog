const Mockjs = require('Mockjs');

const total = 428
const pageSize = 10
const currentPage = 1

module.exports = {
  code: 200,
  success: 'success',
  data: {
    articleList: [
      {
        id: '1',
        title: '按时大苏打实打实啊实打实的',
        dateTime: '2021/6/6',
        path: 'bi-bao'
      },
      {
        id: '2',
        title: '按时大苏打实打实啊实打实的',
        dateTime: '2021/6/6',
        path: 'yuan-xing-lian'
      },
      {
        id: '3',
        title: '按时大苏打实打实啊实打实的',
        dateTime: '2021/6/6',
        path: 'bi-bao'
      },
      {
        id: '4',
        title: '按时大苏打实打实啊实打实的',
        dateTime: '2021/6/6',
        path: 'bi-bao'
      }
    ],
    total: 888,
    pageSize: 10,
    currentPage: 1
  }
}