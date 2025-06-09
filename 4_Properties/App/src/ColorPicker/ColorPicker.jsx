import React, { useState } from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker(){

    const [color, setColor] = useState("#ff0000");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h2>Color Picker</h2>

            <div className='color-display' style={{backgroundColor: color, width: '100px', height: '50px'}}></div>
            
            <label>Select a Color</label>
            <input 
                type="color" 
                value={color} 
                onChange={handleColorChange} 
                style={{width: '100px', height: '50px'}}
            />
                       
            <p>Value: {color}</p>
        </div>
    );
}

export default ColorPicker;