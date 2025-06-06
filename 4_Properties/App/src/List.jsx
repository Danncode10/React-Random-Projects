

function List(
    items = [{id: 1, name: "Sample", calories: 0},],
    category = "none",
    ){
    
    const lowCalorie = [];
    const highCalorie = [];
    for (const fruit of items) {
        if (fruit.calories < getCalorie.value) {
            lowCalorie.push(fruit);
        }
        else {
            highCalorie.push(fruit);
        }
    }


    const listItems = lowCalorie.map(fruit => (
        <li key={fruit.id}>
            {fruit.name} - {fruit.calories} calories
        </li>
    ));

    return listItems;
}

export default App

// const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
//                                        {id: 7, name: "celery", calories: 15}, 
//                                        {id: 8, name: "carrots", calories: 25}, 
//                                        {id: 9, name: "corn", calories: 63}, 
//                                        {id: 10, name: "broccoli", calories: 50}];

//     return( <>
//                     {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//                     {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
//                 </>);