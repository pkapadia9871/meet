import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE}) => {
    
    const handleInputChanged = (event) => {
        const value = event.target.value
        setCurrentNOE(value)
    };

    return (
        <div id = "number-of-events">
            <label>Number of Events: </label>
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
            />
        </div>
    )
};

export default NumberOfEvents;