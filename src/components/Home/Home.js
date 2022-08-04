import EventContainer from '../EventContainer/EventContainer'

export default function Home( {eventData} ){
    return(
        <div> 
            <EventContainer
            eventData={eventData}
        /> 
        </div>
    )
}