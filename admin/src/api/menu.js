import request from '@/utils/request'

export function fecthMenuList () {
  return request({
    url: '/api/menu/list',
    method: 'get'
  })
}