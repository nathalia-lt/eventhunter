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
        <div className= 'eventContainerTitle'>
        <h1> FIND YOUR NEXT EVENT </h1>
        <div eventContainersCategories>
        <div className='eventCategorie' >Music</div>
        <div className='eventCategorie' >Sports</div>
        <div className='eventCategorie' >Theater</div>
        <div className='eventCategorie' >Kids</div>
        </div>
        <div className='eventContainer'>
            {eventsToDisplay}
        </div>
        </div>
    )
}