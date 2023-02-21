import React from "react";
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
    addTask: () => void
}

export const Todolist = (props: TodolistPropsType) => {


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button onClick={props.addTask}>+</button>
        </div>
        <ul>
            {props.tasks.map((task) => {
                return <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => {
                        props.removeTask(task.id)
                    }}>✖
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
