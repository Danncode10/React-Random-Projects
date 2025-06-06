import List from './List.jsx'

function App() {

    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];
    fruits.sort((a, b) => a.calories - b.calories);
    const lowCalorieFruits = [];
    for (const fruit of fruits) {
        if (fruit.calories < 100) {
            lowCalorieFruits.push(fruit);
        }
    }

    const listItems = lowCalorieFruits.map(fruit => (
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