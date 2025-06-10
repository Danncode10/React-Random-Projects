
import React, {useState} from 'react';

function Cars(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carName, setCarName] = useState("");
    const [carBrand, setCarBrand] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            name: carName,
            brand: carBrand
        };
        setCars(prevCars => [...prevCars, newCar]);

        // Clear the input fields after adding the car
        setCarYear(new Date().getFullYear());
        setCarName("");
        setCarBrand("");
    }

    function handleRemoveCar(index) {
        setCars(prevCars => prevCars.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleNameChange(event) {
        setCarName(event.target.value);
        
    }

    function handleBrandChange(event) {
        setCarBrand(event.target.value);
    }


    return(
        <div>
            <h1>List of Car Objects</h1>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} - {car.name} ({car.brand})
                    </li>
                )}
            </ul>
            <input 
                type="number" 
                placeholder="Car Name" 
                value={carYear} 
                onChange={handleYearChange}
            /><br />
            <input 
                type="text" 
                placeholder="Car Name" 
                value={carName} 
                onChange={handleNameChange}
            /><br />
            <input 
                type="text" 
                placeholder="Car Brand" 
                value={carBrand} 
                onChange={handleBrandChange}

                onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleAddCar();
                        }
                    }}
            /><br />
            <button onClick={handleAddCar}>
                Add Car
            </button>
        </div>
    );

}

export default Cars;