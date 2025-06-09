import React, { useState } from 'react';

function MyComponent() {
    
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");

    function updateName(event){
        setName(event.target.value);
    }

    function updateQuantity(event){
        setQuantity(event.target.value);
    }

    function updateComment(event){
        setComment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={updateName}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={updateQuantity}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={updateComment} placeholder="Tell me what you want" />
            <p>Comment: {comment}</p>
        </div>
    )
}


export default MyComponent;