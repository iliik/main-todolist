import React from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";

function App() {
    return (
        <div className="App">
            <Todolist title={'Todos'}/>
            <Todolist title={'What to Learn'}/>
            <Todolist title={'Books'}/>
        </div>
    );
}

export default App;
