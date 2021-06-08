import request from '@/util/request';

export const getArticleList = (params) => {
  return request({
    method: 'GET',
    url: 'http://localhost:8888/api/article',
    params
  })
}