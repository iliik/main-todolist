import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterTask} from "../App";


export type TaskType = {
    title: string
    id: string
    isDone: boolean
}
export type TodolistPropsType = {
    id:string
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterTask) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter:FilterTask
}

export const Todolist = (props: TodolistPropsType) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }
    const onKeyUHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (event.key === 'KeyUp') {
            addTask()
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onAllClickHandler = () => {
        props.changeFilter('all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyUp={onKeyUHandler} className={error ? 'error' : ''}/>
            <button onClick={addTask}>+</button>
            {error && <div className='errorMessage'>{error}</div> }
        </div>
        <ul>
            {props.tasks.map((task) => {
                const onClickHandler = () => {
                    props.removeTask(task.id)
                }
                const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                    let newIsDoneValue = event.currentTarget.checked
                    props.changeTaskStatus(task.id, newIsDoneValue)
                }
                return <li key={task.id} className={task.isDone ? 'isDone' : ''}>
                    <input type="checkbox" checked={task.isDone} onChange={onChangeHandler} />
                    <span>{task.title}</span>
                    <button onClick={onClickHandler}>✖</button>
                </li>
            })}
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'activeFilter' : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? 'activeFilter' : ''} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? 'activeFilter' : ''} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
