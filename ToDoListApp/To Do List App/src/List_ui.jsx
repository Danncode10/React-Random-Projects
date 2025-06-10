import ToDoList from "./ToDoList";

function List_ui(
    {
        key = 0, //Default
        index = 0,
        text = "no text",
        deleteFunction

    }
){

    return(
        <div>
            <p>{text}</p>
            <button className="delete-list" onClick={() => deleteFunction(index)}>Delete</button>
            <button className="up-list">⬆️</button>
            <button className="down-list">⬇️</button>
        </div>
    );
}

export default List_ui;