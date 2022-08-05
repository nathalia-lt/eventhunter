

export default function EventCard( {event} ){

    let image = event.images[0].url
    //console.log(image)
    let name = event.name
    let date = event.dates.start.dateTime
    //console.log(date)
    let city = event._embedded.venues[0].city.name
    //console.log(city)
    let state = event._embedded.venues[0].state.stateCode
    //console.log(state)
    let location = city + ', ' + state
    //console.log(location)
    let venue = event._embedded.venues.name
    let genre = event.classifications[0].segment.name
    // console.log(genre)


    return(
        <div>
            <div className='eventCard' >
                <img className='eventImage' src={image} alt={name} />
                <div className='eventInfo'>
                    <div className='eventGenre' > {genre} </div>
                    <div className= 'eventName' >{event.name} </div>
                    <div className='eventDate'> {date} </div>
                    <div className= 'eventLocation'> 
                    <img src="https://img.icons8.com/offices/480/000000/marker.png"/>
                    <div className="location"> {location} </div>
                    </div>
                </div>

            </div>
        </div>
    )
}