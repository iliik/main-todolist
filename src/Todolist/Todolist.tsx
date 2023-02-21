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



    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler} onKeyUp={onKeyUHandler}/>
            <button onClick={addTask}>+
            </button>
        </div>
        <ul>
            {props.tasks.map((task) => {
                return <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => {props.removeTask(task.id)}}>✖
                    </button>
                </li>
            })}
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter('all')
            }}>All
            </button>
            <button onClick={() => {
                props.changeFilter('active')
            }}>Active
            </button>
            <button onClick={() => {
                props.changeFilter('completed')
            }}>Completed
            </button>
        </div>
    </div>
}
