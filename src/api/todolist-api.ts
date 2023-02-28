import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf'
    }
})
export type ResponseType<D> = {
    resultCode: number
    messages: string[]
    fieldsErrors: Array<string>
    data: D
}
export type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType<{ item: TodolistType }>>(`todo-lists/${todolistId}`, {title: title},)
        return promise
    },

    getTodolist() {
        const promise = instance.get<ResponseType<{ item: TodolistType }>>('todo-lists/')
        return promise;
    },
    createTodolist() {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists/', {title: 'newTodolistsss'})
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType<{ item: TodolistType }>>(`todo-lists/${todolistId}`)
        return promise
    }
}