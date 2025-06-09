import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Default Name");

    return(
        <>
            <p> Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </>
    )
}


export default MyComponent;