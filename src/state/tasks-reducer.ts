import {TasksStateType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string,
    taskId: string,

}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    title: string
    todolistId: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    taskId: string
    title: string
    todolistId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string
    isDone: boolean
    todolistId: string
}

type ActionsType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskTitleActionType
    | ChangeTaskStatusActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            let copeState = {...state}
            const tasks = state[action.todolistId]
            const filterTasks = tasks.filter(t => t.id !== action.taskId)
            copeState[action.todolistId] = filterTasks
            return copeState

        case 'ADD-TASK':
            let stateCopy = {...state}
            const task = stateCopy[action.todolistId]
            const newTasks = {id: v1(), title: action.title, isDone: false}
            const newTask = [newTasks, ...task]
            stateCopy[action.todolistId] = newTask
            return stateCopy

        case 'CHANGE-TASK-TITLE': {
            let stateCopy = {...state}
            let tasks = state[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.title = action.title
            }
            return stateCopy
        }
        case 'CHANGE-TASK-STATUS': {
            let stateCopy = {...state}
            let tasks = state[action.todolistId]
            let task = tasks.find(t => t.id === action.taskId)
            if (task) {
                task.isDone = action.isDone
            }
            return stateCopy
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', todolistId, taskId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId}
}
export const changeTaskTitleAC = (todolistId: string, title: string, taskId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', todolistId, title, taskId}
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId}
}
