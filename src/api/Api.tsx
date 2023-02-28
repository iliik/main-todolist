import {useEffect, useState} from "react";
import axios from "axios";


const instans = {

}

export const GetTodolist = () => {
    const [state,setState] = useState<any>(null)
    useEffect(()=> {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists')
    },[])
}