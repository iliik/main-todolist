import {TodolistType} from "../App";

type ActionType = {
    type: string
    [key: string]: any
}
export const todolistsReducer = (state: TodolistType[], action: ActionType) => {
    switch (action.type) {
        case'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id != action.id)
        }
        case'ADD-TODOLIS': {
            return
        }

        default :
            throw new Error(' I \'t understand this type')
    }
}