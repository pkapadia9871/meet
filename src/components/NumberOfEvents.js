import { useState } from "react";

const NumberOfEvents = () => {
    
    const handleInputChanged = (event) => {
        const value = event.target.value
    };

    return (
        <div id = "number-of-events">
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
            />
        </div>
    )
};

export default NumberOfEvents;