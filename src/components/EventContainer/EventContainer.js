import EventCard from "../EventCard/EventCard"


export default function EventContainer({ eventData }) { 
    let allEvents = eventData._embedded.events
    console.log(allEvents)
    let event = eventData._embedded.events[0]
    //console.log(event)
    
    return (
        <div className='eventContainer'>
            <EventCard
            event={event}
            />
        </div>
    )
}