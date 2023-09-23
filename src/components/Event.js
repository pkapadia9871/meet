// src/components/Event.js

import { useState } from "react";

const Event = ({event}) => {

  const [showDetails, setShowDetails] = useState(false)

    return (
      <li className="event">
        <h4>{event.summary}</h4>
        <h4>{event.created}</h4>
        <h4>{event.location}</h4>
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