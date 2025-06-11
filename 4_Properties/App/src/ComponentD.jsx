import { NameContext } from "./ComponentA";
import React, {useContext} from "react";

function ComponentD(){

    const name = useContext(NameContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <p>Good bye {name}</p>
        </div>
    );
}

export default ComponentD;