import EventContainer from '../EventContainer/EventContainer'

export default function Home( {eventData} ){
    let displayEvents = eventData._embedded ? <EventContainer
    eventData={eventData}
/> : null
    return(
        <div> 
            {displayEvents}
        </div>
    )
}