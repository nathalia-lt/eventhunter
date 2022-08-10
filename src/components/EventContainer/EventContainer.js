
import React, { useState } from "react"
import EventCard from "../EventCard/EventCard"


export default function EventContainer({ eventData, favoritesData, setFavoritesData }) {
    let allEvents = eventData._embedded.events
    let eventsToDisplay = allEvents.map(event => {
        function favoriteEvent(){
            setFavoritesData([...favoritesData, event]) //copies the current values of the current favories is and add event too
        }

        return (
            <EventCard
                key={event.id}
                event={event}
                favoriteEvent={favoriteEvent}
            />
        )
    })
    let event = eventData._embedded.events[0]
    //console.log(event)

    //------------------------------------------------------

   
    return (
        <div className='eventContainerTitle'>
            <div className='eventContainer'>
                {eventsToDisplay}
            </div>
        </div>
    )
}