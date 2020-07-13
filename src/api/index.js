import request from '@/utils/request'

// 列表
export function getList(data) {
  return request({
    url: '/post/get',
    method: 'post',
    data
  })
}

// 删除
export function listRemove(data) {
  return request({
    url: '/post/delete',
    method: 'post',
    data
  })
}

// 添加,编辑
export function listEditAndAdd(data) {
  return request({
    url: '/post/add',
    method: 'post',
    data
  })
}