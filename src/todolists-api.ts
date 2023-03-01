import axios from "axios/index";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf'
    }
})


type TodolistType = {
    id: string
    title: string
    order: number
    addedDate: string
}
type ResponseTodolistType<D> = {
    messages: string []
    data: { item: TodolistType }
    resultCode: number
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: {}
}


export const todolistAPI = {
    getTodolist() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseTodolistType<{ item: TodolistType }>>('todo-lists', {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseTodolistType<{}>>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseTodolistType<{}>>(`todo-lists/${todolistId}`, {title: title})
    },
    getTask(todolistId: string) {
        return instance.get(`todo-lists/${todolistId}/tasks`)
    }
}