import React, {useState} from 'react';

function FoodList(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);


    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        // Clears the input field
        document.getElementById("foodInput").value = "";
        // Adds the new food to the list
        setFoods(prevFoods => [...prevFoods, newFood]);
        
    }

    function handleRemoveFood(index){
        // Removes the food from the list
        setFoods(prevFoods => prevFoods.filter((_, i) => i !== index));
        // Prevents the default action of the click event
        return false;

    }

    return(
        <div>
            <h1>Food List</h1>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input 
                type="text" placeholder="Add food" id="foodInput" 
                 onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleAddFood();
                    }
                }}
            />
            <button onClick={handleAddFood}>Add</button>
        </div>

    );
    
}

export default FoodList;