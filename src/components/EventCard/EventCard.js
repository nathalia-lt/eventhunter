

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
    let genre = event.classifications[0].segment.name.toUpperCase()
     //console.log(genre)


    let dateTime = new Date(date)
    let day = dateTime.toDateString().slice(0,10).split('') // it turns the time like: Fri, Aug 05 2022 e colocando virgulas
    day.splice(3,0,',')
    day = day.join('')
    //let time = dateTime.toLocaleTimeString() // it turns the time of your computer for ex if it is pm am or military time
    let time = dateTime.toLocaleTimeString().split(':')
    //console.log( time)

    //Military vs AM PM

    let completeTime = time.slice(0, 2).join(':')
    if (time[2].includes('AM') || time[2].includes('PM')){ //account for military time vs non 
        completeTime  += ' ' + time[2].split(' ')[1]
    }
//------------------------------------------------
//here I am going to set colors for the genres and in eventCard.scss 

let genreClass = 'eventGenre ' + genre.toLowerCase().replace(/ /g, '').replace('&', '')
console.log(genreClass)
//I need to get rid of the space between  arts e theatre. So I used replace  (regular expression//) g (g means globally)

//------------------------------------------------
//button

function HandleButtonClick(){
    
}
    return(
        <div>
            <div className='eventCard' >
                <img className='eventImage' src={image} alt={name} />
                <div className='eventInfo'>
                    <div className={genreClass} > {genre} </div>
                    {/* a className can also be a variable, that will change depends on the event data */}
                    <div className= 'eventName' >{event.name} </div>
                    <div className='eventDate'> {day + ', ' + completeTime} </div>
                    <div className= 'eventLocation'>
                    {/* <img src='https://img.icons8.com/ios/50/000000/marker--v1.png' /> */}
                    <img src="https://img.icons8.com/offices/480/000000/marker.png"/>
                    <div className="location"> {location} </div>
                    </div>
                    <div className= 'eventButtonContainer'>    
                    <button className='eventButton'> Info </button>
                    </div>
                </div>

            </div>
        </div>
    )
}