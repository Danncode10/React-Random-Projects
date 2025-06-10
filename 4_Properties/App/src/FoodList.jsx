import React, {useState} from 'react';

function FoodList(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);


    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        // Clears the input field
        document.getElementById("foodInput").value = "";
        // Adds the new food to the list
        setFoods([...foods, newFood]);
        
    }

    function handleRemoveFood(){

    }

    return(
        <div>
            <h1>Food List</h1>
            <ul>
                {foods.map((food, index) => 
                    <li key={index}>
                        {food}
                    </li>
                )}
            </ul>
            <input type="text" placeholder="Add food" id="foodInput" />
            <button onClick={() => handleAddFood}>Add</button>
        </div>

    );
    
}

export default FoodList;