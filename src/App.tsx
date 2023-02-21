import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";

export type FilterTask = 'all' | 'active' | 'completed'

function App() {
    const [filter, setFilter] = useState<FilterTask>('all')

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest Api", isDone: false},
        {id: 5, title: "GraphQl", isDone: false}
    ])

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    let tasksForTodolist = tasks
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value: FilterTask) {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist title={'Todos'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
