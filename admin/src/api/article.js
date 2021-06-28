import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/api/article',
    method: 'post',
    data
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue-admin-template/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-admin-template/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-admin-template/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-admin-template/article/update',
    method: 'post',
    data
  })
}
