

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

// import List from './List.jsx';

// function App() {
//    const fruits = [{id: 1, name: "apple", calories: 95}, 
//                     {id: 2, name: "orange", calories: 45}, 
//                     {id: 3, name: "banana", calories: 105}, 
//                     {id: 4, name: "coconut", calories: 159}, 
//                     {id: 5, name: "pineapple", calories: 37}];
//   return(
//     <>
//       <List items={fruits} category="fruits"/>
//     </>
//   );
// }

// export default App;
