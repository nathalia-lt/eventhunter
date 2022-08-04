

export default function EventContainer( {eventData} ){
    let event = eventData._embedded.events[0]
    console.log(event)
    return(
        <div className='eventContainer'>
            <div className='eventCard' >
                {/* <div>{event.name} </div> */}

            </div>

        </div>
    )
}