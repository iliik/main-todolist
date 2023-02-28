import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf'
    }
}

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title: title},
            settings)
        return promise
    },

    getTodolist() {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',
            settings)
        return promise;
    },
    createTodolist() {
        const promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',
            {title: 'newTodolistsss'}
            , settings)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            settings)
        return promise
    }
}