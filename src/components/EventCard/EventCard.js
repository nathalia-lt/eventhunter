import { useNavigate } from "react-router-dom";
import emptyheart from './emptyheart.png'
import redheart from './redheart.png'


export default function EventCard({ event, favoriteEvent, unFavoriteEvent, inFavorites }) {

    let image = event.images[0].url
    //console.log(image)
    let name = event.name.length > 30 ? event.name.slice(0,30) + '...' : event.name
    //Date
    let day;
    let time;
    let date;
    let completeTime;
    let eventDateAndTime;

    if (event.dates.start.dateTime) {
        date = event.dates.start.dateTime
        let dateTime = new Date(date)
        day = dateTime.toDateString().slice(0, 10).split('') // it turns the time like: Fri, Aug 05 2022 e colocando virgulas
        day.splice(3, 0, ',')
        day = day.join('')
        //let time = dateTime.toLocaleTimeString() // it turns the time of your computer for ex if it is pm am or military time
        time = dateTime.toLocaleTimeString().split(':')
        //console.log( time)

        //Military vs AM PM

        completeTime = time.slice(0, 2).join(':')
        if (time[2].includes('AM') || time[2].includes('PM')) { //account for military time vs non 
            completeTime += ' ' + time[2].split(' ')[1]
        }
        eventDateAndTime = day + ', ' + completeTime
    } else if (event.dates.start.localDate) { //here in case the event doest have a date
        date = event.dates.start.localDate
        let dateTime = new Date(date)
        day = dateTime.toDateString().slice(0, 10).split('') // it turns the time like: Fri, Aug 05 2022 e colocando virgulas
        day.splice(3, 0, ',')
        day = day.join('')

        completeTime = 'TBA'
        eventDateAndTime = day + ', ' + completeTime
    }else {
        eventDateAndTime = 'TBA'

    }

    //location

    let location;
    let state;
    let city = event._embedded.venues[0].city.name
    if(event._embedded.venues[0].state){
        state = event._embedded.venues[0].state.stateCode
    }else if (event._embedded.venues[0].country){
        state = event._embedded.venues[0].country.name
    }else{
        state = ''
    }


    location = city + ', ' + state

    //console.log(location)
    let venue = event._embedded.venues.name
    let genre = event.classifications[0].segment.name.toUpperCase()
    //console.log(genre)


    //------------------------------------------------
    //here I am going to set colors for the genres and in eventCard.scss 

    let genreClass = 'eventGenre ' + genre.toLowerCase().replace(/ /g, '').replace('&', '')

    //I need to get rid of the space between  arts e theatre. So I used replace (regular expression//) g (g means globally)

    //------------------------------------------------
    //button
    //here we are going to create a button to our new page. on click is going to send us to the new page

    let navigate = useNavigate() 

    let id = event.id //Here I am getting an Id for each event

    function HandleButtonClick() {
        navigate('/event/'+ id) //when we click on this button is going to send to the page event/ with the especific ID of the event
    }


    return (
        <div>
            <div className='eventCard' >
                <img className='eventImage' src={image} alt={name} />
                <div className='eventInfo'>
                    <div className={genreClass} > {genre} </div>
                    {/* a className can also be a variable, that will change depends on the event data */}
                    <div className='eventName' >{name} </div>
                    <div className='eventDate'> {eventDateAndTime} </div>
                    <div className='eventLocation'>
                        {/* <img src='https://img.icons8.com/ios/50/000000/marker--v1.png' /> */}
                        <img src="https://img.icons8.com/offices/480/000000/marker.png" alt='' />
                        <div className="location"> {location} </div>
                    </div>
                    <div className='eventButtonContainer'>
                        <button className='eventButtonInfo' onClick={HandleButtonClick} > Info </button>
                        { inFavorites ? <img src={redheart} alt='' className="eventButtonHeart" onClick={unFavoriteEvent} /> :<img src={emptyheart} alt='' className="eventButtonHeart unfavorited" onClick={favoriteEvent}/>}
                    </div>
                </div>

            </div>
        </div>
    )
}