
import React, { useState } from "react"
import EventCard from "../EventCard/EventCard"


export default function EventContainer({ eventData, favoritesData,setFavoritesData }) {
    let favoriteIds = favoritesData.map(event=>event.id)

    let eventsToDisplay = eventData.map(event => {
        function favoriteEvent(){
            setFavoritesData([...favoritesData,event])
        }
        let inFavorites = favoriteIds.includes(event.id)
        function unFavoriteEvent(){
            let filtedFavorites = favoritesData.filter(fav => fav.id !== event.id)
            setFavoritesData(filtedFavorites)
        }

        return (
            <EventCard
                key={event.id}
                event={event}
                favoriteEvent={favoriteEvent}
                inFavorites={inFavorites}
                unFavoriteEvent={unFavoriteEvent}
            />
        )
    })

    return (
        <div className="eventContainer">
            {eventsToDisplay}
        </div>
    )
}
