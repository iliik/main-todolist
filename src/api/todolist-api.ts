import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf'
    }
})

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put(`todo-lists/${todolistId}`, {title: title},)
        return promise
    },

    getTodolist() {
        const promise = instance.get('todo-lists/')
        return promise;
    },
    createTodolist() {
        const promise = instance.post('todo-lists/', {title: 'newTodolistsss'})
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete(`todo-lists/${todolistId}`)
        return promise
    }
}