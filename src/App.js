import React from 'react';
/*import logo from './logo.svg';*/
// src/App.js

import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import { extractLocations, getEvents } from './api';
import { InfoAlert } from './components/Alert';
import { ErrorAlert } from './components/Alert';
import { WarningAlert } from './components/Alert';

import './App.css';

const App = () => {
  
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  
  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("")
    } else {
      setWarningAlert("error")
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }
  
    return (
      <div className="App">
        <h1>Meet App</h1>
        <div className="alerts-container">
          {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
          {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
          {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
        </div>
        <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert}/>
        <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>
        <div className='charts-container'>
          <CityEventsChart allLocations={allLocations} events={events} />
          <EventGenresChart events={events} />
        </div>
        <EventList events={events}/>
      </div>
    );
}

export default App;