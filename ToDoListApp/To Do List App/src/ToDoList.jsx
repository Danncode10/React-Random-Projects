import React, {useState} from "react";
import List_ui from "./List_ui";

function ToDoList(){

    const [tasks, setTasks] = useState([]);

    function handleAddTask(){
        const newTask = document.getElementById("input").value;
        setTasks(prevTasks => [...prevTasks, newTask])
    }

    function handleDeleteTask(index){
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    return(
        <div className="to-do-container">
            <h1>To-Do-List</h1>
            <input type="text" id="input"></input>
            <button className="add-button" onClick={handleAddTask}>Add</button>
            {tasks.map((task, index) => (
                <List_ui
                    key={index}
                    index={index}
                    text={task}
                    deleteFunction={handleDeleteTask}
                />
))}
        </div>
    );
}

export default ToDoList;