import request from '@/util/request'

export const getMenuList = () => {
  return request({
    method: 'GET',
    url: 'http://localhost:8888/api/menu'
  })
}