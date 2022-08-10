import EventContainer from '../EventContainer/EventContainer'
import Filter from '../Filter/Filter'
import PageButtons from '../PageButtons/PageButtons'

export default function Home( {eventData, setEventData, favoritesData, setFavoritesData} ){
    document.title ='EventHunter'
    let displayEvents = eventData._embedded ? <EventContainer
    favoritesData={favoritesData}
    setFavoritesData={setFavoritesData}
    eventData={eventData._embedded.events}
/> : null

let displayPageButtons = eventData.page ? <PageButtons
eventData={eventData}
setEventData={setEventData}
/> : null



    return(
        <div> 
            <Filter
            setEventData={setEventData}
            />
            {displayEvents}
            {displayPageButtons}
        </div>
    )
}