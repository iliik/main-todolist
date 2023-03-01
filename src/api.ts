import axios from "axios/index";
import {GetTask} from "./stories/todolists-api.stories";

const setting = {
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists',
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf'
    }
}

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


export const todolistAPI = {
    getTodolist() {
        const promise = axios
            .get<TodolistType[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', setting)
        return promise
    },
    createTodolist(title: string) {
        const promise = axios
            .post<ResponseTodolistType<{ item: TodolistType }>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, setting)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = axios
            .delete<ResponseTodolistType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, setting)
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = axios
            .put<ResponseTodolistType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: title}, setting)
        return promise
    },
    getTask(todolistId: string) {
        const promise = axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, setting)
        return promise
    }
}