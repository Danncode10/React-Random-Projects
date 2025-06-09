import React, { useState } from 'react';

function MyComponent() {

    const [shipping, setShipping] = useState("Delivery");

    function updateShipping(event) {
        setShipping(event.target.value);
    }

    return(
        <div>
            <label>
                <input
                    type="radio"
                    value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={updateShipping}
                />
                Pick Up
            </label>
            <br />
            <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={updateShipping}
                />
                Delivery
            </label>

            <p> Shipping: {shipping}</p>
            
        </div>
    );
}


export default MyComponent;

// import React, { useState } from 'react';

// function MyComponent() {
    
//     const [name, setName] = useState();
//     const [quantity, setQuantity] = useState(0);
//     const [comment, setComment] = useState("");

//     function updateName(event){
//         setName(event.target.value);
//     }

//     function updateQuantity(event){
//         setQuantity(event.target.value);
//     }

//     function updateComment(event){
//         setComment(event.target.value);
//     }

// const [payment, setPayment] = useState("");

//     function updatePayment(event) {
//         setPayment(event.target.value);
//     }

//     return(
//         <div>
//             <input value={name} onChange={updateName}/>
//             <p>Name: {name}</p>

//             <input type="number" value={quantity} onChange={updateQuantity}/>
//             <p>Quantity: {quantity}</p>

//             <textarea value={comment} onChange={updateComment} placeholder="Tell me what you want" />
//             <p>Comment: {comment}</p>
            // <select value={payment} onChange={updatePayment}>

            //                 <option value="">Select Payment Method</option>
            //                 <option value="credit">Credit Card</option>
            //                 <option value="debit">Debit Card</option>
            //                 <option value="paypal">PayPal</option>

            //             </select>

            //             <p>Selected Payment Method: {payment}</p>
//         </div>
//     )
// }


// export default MyComponent;