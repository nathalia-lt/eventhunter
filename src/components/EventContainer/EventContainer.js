

export default function EventContainer( {eventData} ){
    let event = eventData._embedded.events[0]
    console.log(event)
    let image = event.images[0].url
    //console.log(image)
    let name = event.name
    let date = event.dates.start.dateTime
    //console.log(date)
    let city = event._embedded.venues[0].city.name
    //console.log(city)
    let state = event._embedded.venues[0].state.stateCode
    //console.log(state)
    let location = city +', '+ state
    //console.log(location)
    let venue = event._embedded.venues.name
    let genre = event.classifications[0].segment.name
   // console.log(genre)


    
    //image
    //description/ about
    //date
    //location
    //segment/genre
    return(
        <div className='eventContainer'>
            <div className='eventCard' >
                <div>{event.name} </div>
                <img className= 'eventImage' src={image} alt={name} />
                <div className= 'dateTime'> {date} </div>
                <div className= "location"> {location} </div>
                <div classname= 'genre' > {genre} </div>

            </div>

        </div>
    )
}