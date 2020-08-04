import request from './../utils/request'

const todoRootUrl = '/todos'

export function getTodos() {
    return request({
        url: `${todoRootUrl}`,
        method: 'get'
    })
}

export function postTodos(data) {
    return request({
        url: `${todoRootUrl}`,
        method: 'post',
        data: data
    })
}

export function putTodos(data) {
    return request({
        url: `${todoRootUrl}/${data.id}`,
        method: 'put',
        data: {status: data.status}
    })
}

export function deleteTodos(data){
    return request({
        url:`${todoRootUrl}/${data.id}`,
        method: 'delete'
    })
}

