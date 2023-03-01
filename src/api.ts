import axios from "axios/index";
import {DeleteTodolist, UpdateTodolist} from "./stories/todolists-api.stories";

const setting = {
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists',
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf'
    }
}

export const todolistAPI = {
    getTodolist() {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', setting)
        return promise
    },
    createTodolist(title: string) {
        const promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, setting)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, setting)
        return promise
    },
    updateTodolist (todolistId: string,title:string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title:title}, setting)
        return promise
    }
}