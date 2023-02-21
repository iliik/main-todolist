import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";
import {v1} from "uuid";

export type FilterTask = 'all' | 'active' | 'completed'
export type TodolistsType = {
    id: string,
    title: string,
    filter: FilterTask
}

function App() {

    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},

        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    })


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }


    function changeFilter(value: FilterTask, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    function addTask(title: string) {
        let task = {id: v1(), title, isDone: false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    function changeTaskStatus(id: string, isDone: boolean) {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }
    }

    return (
        <div className="App">
            {todolists.map((todolist) => {
                let tasksForTodolist = tasks
                if (todolist.filter === 'active') {
                    tasksForTodolist = tasks.filter(task => task.isDone === false)
                }
                if (todolist.filter === 'completed') {
                    tasksForTodolist = tasks.filter(task => task.isDone === true)
                }

                return <Todolist key={todolist.id}
                                 id={todolist.id}
                                 title={todolist.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeTaskStatus}
                                 filter={todolist.filter}
                />
            })}

        </div>
    );
}

export default App;
