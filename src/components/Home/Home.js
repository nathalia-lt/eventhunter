import EventContainer from '../EventContainer/EventContainer'
import Filter from '../Filter/Filter'
import PageButtons from '../PageButtons/PageButtons'

export default function Home( {eventData, setEventData, favoritesData, setFavoritesData} ){
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
            <h1> FIND YOUR NEXT EVENT </h1>
            {/* h1 automaticamente style it, nao precisa colocar bold in the scss */}
            <Filter
            setEventData={setEventData}
            />
            {displayEvents}
            {displayPageButtons}
        </div>
    )
}