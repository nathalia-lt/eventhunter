import EventContainer from '../EventContainer/EventContainer'
import Filter from '../Filter/Filter'

export default function Home( {eventData, setEventData} ){
    let displayEvents = eventData._embedded ? <EventContainer
    eventData={eventData}
/> : null
    return(
        <div> 
            <h1> FIND YOUR NEXT EVENT </h1>
            {/* h1 automaticamente style it, nao precisa colocar bold in the scss */}
            <Filter
            setEventData={setEventData}
            />
            {displayEvents}
        </div>
    )
}