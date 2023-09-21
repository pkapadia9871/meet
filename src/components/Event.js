// src/components/Event.js

import { useState } from "react";

const Event = ({event}) => {

  const [showDetails, setShowDetails] = useState(false)

    return (
      <li className="event">
        <h1>{event.summary}</h1>
        <h1>{event.created}</h1>
        <h1>{event.location}</h1>
        <button className="click-details" onClick={()=>{setShowDetails(!showDetails)}}>
          {showDetails ? 'hide details':'show details'}
        </button>
        {showDetails &&
        <div className="details">
          <h1>Event Details</h1>
        </div>
        }       
      </li>
    );
  }
  
  export default Event;