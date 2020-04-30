import React from 'react';
import { useHistory } from "react-router-dom";

interface Event {
  venue: {
    displayName: string;
  }
  location: {
    city: string;
  }
} 

export default function GigsResults({ events, setConcert } : any) {

  const history = useHistory();

  const selectConcert = (event: any) => {
    setConcert(event);
    history.push("/gig");
  }

  return (
    <div>
      {events && events.map((event: Event, i: number) => {
        const { venue: { displayName } , location: { city } } = event;
        return (
          <div key={i}>
            <p>Venue: {displayName}</p>
            <p>Location: {city}</p>
            <button onClick={() => selectConcert(event)}>View Hotels for this concert</button>
          </div>
        )
      })}

      <p onClick={() => history.push("/")}>Return to the start</p>
    </div>
  )
};
