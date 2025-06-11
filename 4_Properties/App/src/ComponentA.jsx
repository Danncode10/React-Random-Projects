import ComponentB from "./ComponentB";
import React, {useState, createContext} from "react";

export const NameContext = createContext();

function ComponentA(){

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <ComponentB />
            
        </div>
    );
}

export default ComponentA;