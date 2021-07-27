import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/api/article/list',
    method: 'post',
    data
  })
}

export function fetchArticle(id) {
  return request({
    url: '/api/article/detail',
    method: 'post',
    data: { id }
  })
}

export function createArticle(data) {
  return request({
    url: '/api/article/create',
    method: 'post',
    data
  })
}

export function editArticle(data) {
  return request({
    url: '/api/article/edit',
    method: 'put',
    data
  })
}

export function deleteArticle(data) {
  return request({
    url: '/api/article/delete',
    method: 'post',
    data
  })
}
