import { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Default Name");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    function updateName() {
        setName("New Name");
    }

    const incrementAge = () => {
        setAge(prevAge => prevAge + 1);
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <>
            <p> Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p> Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p> Employment Status: {isEmployed ? "Employed" : "Unemployed"}</p>
            <button onClick={toggleEmployment}>
                {isEmployed ? "Unemploy" : "Employ"}
            </button>
        </>
    )
}


export default MyComponent;