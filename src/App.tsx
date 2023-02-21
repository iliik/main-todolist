import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";

function App() {
    const [tasks, setTasks]= useState([
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

    return (
        <div className="App">
            <Todolist title={'Todos'}
                      tasks={tasks}
                      removeTask={removeTask}/>
        </div>
    );
}

export default App;
