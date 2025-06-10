import ToDoList from "./ToDoList";

function List_ui(
    {
        index = 0,
        text = "no text",
        deleteFunction, moveUpFunction, moveDownFunction

    }
){

    return(
        <div className="task-card">
            <p className="to-do-text">{text}</p>
            <div className="control-section">
                <button className="delete-list" onClick={() => deleteFunction(index)}>Delete</button>
                <button className="up-list" onClick={() => moveUpFunction(index)}>⬆️</button>
                <button className="down-list" onClick={() => moveDownFunction(index)}>⬇️</button>
            </div>
            
        </div>
    );
}

export default List_ui;