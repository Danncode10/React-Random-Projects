import ComponentB from "./ComponentB";
import React, {useState, createContext} from "react";

export const NameContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Dann");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <p>Hello {user}</p>
            <NameContext.Provider value={user} >
                <ComponentB />
            </NameContext.Provider>
            
            
        </div>
    );
}

export default ComponentA;