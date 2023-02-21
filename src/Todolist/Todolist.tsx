import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterTask} from "../App";
import {AddItemForm} from "../AddItemForm";
import {EditableSpan} from "../EditableSpan";


export type TaskType = {
    title: string
    id: string
    isDone: boolean
}
export type TodolistPropsType = {
    id: string
    title: string
    tasks: TaskType[]
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterTask, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    filter: FilterTask
    removeTodolist: (id: string) => void
}

export const Todolist = (props: TodolistPropsType) => {

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }
    const onAllClickHandler = () => {
        props.changeFilter(props.filter, 'all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.filter, 'active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.filter, 'completed')
    }
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    const onChangeHandler = () => {

    }
    return <div>
        <h3><EditableSpan value={props.title} onChange={onChangeHandler} />
            <button onClick={removeTodolist}>✖</button>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul>
            {props.tasks.map((task) => {

                const onClickHandler = () => {
                    props.removeTask(task.id, props.id)
                }
                const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
                    let newIsDoneValue = event.currentTarget.checked
                    props.changeTaskStatus(task.id, newIsDoneValue, props.id)
                }

                return<li key={task.id} className={task.isDone ? 'isDone' : ''}>
                    <input type="checkbox" checked={task.isDone} onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>✖</button>
                </li>
            })}
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'activeFilter' : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? 'activeFilter' : ''} onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'activeFilter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
