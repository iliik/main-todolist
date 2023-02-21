import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterTask} from "../App";


export type TaskType = {
    title: string
    id: string
    isDone: boolean
}
export type TodolistPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterTask) => void
    addTask: (title: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    const [title, setTitle] = useState('')

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyUHandler = (event: KeyboardEvent<HTMLInputElement>) => {
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
            <input value={title} onChange={onChangeHandler} onKeyUp={onKeyUHandler}/>
            <button onClick={addTask}>+
            </button>
        </div>
        <ul>
            {props.tasks.map((task) => {
                const onClickHandler = () => {props.removeTask(task.id)}

                return <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={onClickHandler}>✖</button>
                </li>
            })}
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
