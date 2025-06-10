import React, { useState } from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker(){

    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
         <div className={styles['color-picker-container']}>
            <h2>Color Picker</h2>

            <div className={styles['color-display']} style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            
            <label>Select a Color</label>
            <input 
                type="color" 
                value={color} 
                onChange={handleColorChange}
                className={styles['color-input']}
            />
                       
            
        </div>
    );
}

export default ColorPicker;