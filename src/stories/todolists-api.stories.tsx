import {useEffect, useState} from "react";
import axios from "axios";

export default {
    title: 'API'
}
const setting = {
    withCredentials: true
}

export const GetTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', setting)


    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

    }, [])
    return <div>{JSON.stringify(state)}</div>
}