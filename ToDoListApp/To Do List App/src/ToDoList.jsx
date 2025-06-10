import React, {useState} from "react";
import List_ui from "./List_ui";

function ToDoList(){

    const [tasks, setTasks] = useState([]);

    function handleAddTask(){
        const newTask = document.getElementById("input").value;
        setTasks(prevTasks => [...prevTasks, newTask])

        document.getElementById("input").value = "";
    }

    function handleDeleteTask(index){
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    function handleMoveUp(index){
        if (index === 0){
            return;
        }

        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
            return newTasks;
        });
    }

    function handleMoveDown(index){
        if(index >= tasks.length){
            return;
        }

        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            return newTasks;
        });
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
                    moveUpFunction = {handleMoveUp}
                    moveDownFunction = {handleMoveDown}
                />
))}
        </div>
    );
}

export default ToDoList;