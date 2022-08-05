import EventCard from "../EventCard/EventCard"


export default function EventContainer({ eventData }) { 
    let allEvents = eventData._embedded.events
    let eventsToDisplay = allEvents.map(event => {
        return (
            <EventCard
            key={event.id}
            event={event}
            />
        )
    })
    let event = eventData._embedded.events[0]
    //console.log(event)
    
    return (
        <div className='eventContainer'>
            {eventsToDisplay}
        </div>
    )
}