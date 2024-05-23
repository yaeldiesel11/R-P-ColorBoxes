// src/components/Form.js

import React from "react";
import { useState } from "react";
import Cajas from "../Cajas/Cajas";

const Form = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Color </label>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button type="submit">ADD</button>
            </form>
            <Cajas boxes={boxes} />
            {/* pasa el boxes de este componente */}
        </>
    );
}

export default Form;
