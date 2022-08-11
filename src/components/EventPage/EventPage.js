import { useParams } from "react-router-dom"
import axios from "axios"
import key from "../../key"
import React, { useEffect, useState } from "react"



export default function EventPage() {
    const [eventPageData, setEventPageData] = useState({})
    document.title = `${eventPageData.name}`

    let apiKey = '&apikey=' + key
    let params = useParams()
    let id = params.id
    let url = 'https://app.ticketmaster.com/discovery/v2/events/' + id + '?locale=en-us' + apiKey

    useEffect(() => {
        axios.get(url)
            .then(r => setEventPageData(r.data))
    }, [])

    if (!eventPageData.name) return null
    else {
        let name = eventPageData.name
        // Image
        let image = eventPageData.images[0].url
        // Date
        let day;
        let time;
        let date;
        let completeTime;
        let eventDateAndTime;

        if (eventPageData.dates.start.dateTime) {
            date = eventPageData.dates.start.dateTime
            let dateTime = new Date(date)
            day = dateTime.toDateString().slice(0, 10).split('')
            day.splice(3, 0, ',')
            day = day.join('')

            time = dateTime.toLocaleTimeString().split(':')
            completeTime = time.slice(0, 2).join(':')
            if (time[2].includes('AM') || time[2].includes('PM')) { //account for non military time 
                completeTime += ' ' + time[2].split(' ')[1]
            }
            eventDateAndTime = day + ' - ' + completeTime
        } else if (eventPageData.dates.start.localDate) {
            date = eventPageData.dates.start.localDate
            let dateTime = new Date(date)
            day = dateTime.toDateString().slice(0, 10).split('')
            day.splice(3, 0, ',')
            day = day.join('')

            completeTime = 'TBA'
            eventDateAndTime = day + ' - ' + completeTime
        } else {
            eventDateAndTime = 'TBA'
        }


        // console.log(time)

        // Location
        let location;
        let city = eventPageData._embedded.venues[0].city.name
        let state;
        if (eventPageData._embedded.venues[0].state) {
            state = eventPageData._embedded.venues[0].state.stateCode
        } else if (eventPageData._embedded.venues[0].country.name) {
            state = eventPageData._embedded.venues[0].country.name
        }  else if (eventPageData._embedded.venues[0].country.countryCode) {
            state = eventPageData._embedded.venues[0].country.countryCode
        } 
        else {
            state = ''
        }

        let addressLine1;
        let addressLine2;

        if (eventPageData._embedded.venues[0].address) {
            addressLine1 = eventPageData._embedded.venues[0].address.line1;
            addressLine2 = eventPageData._embedded.venues[0].address.line2;
        }

        let postalCode = eventPageData._embedded.venues[0].postalCode ? eventPageData._embedded.venues[0].postalCode : ''

        location = city + ', ' + state + ' ' + postalCode


        let venue = eventPageData._embedded.venues[0].name
        // Genre/Segment
        let genre = eventPageData.classifications[0].segment.name.toUpperCase()
        // Description / about
        let genreClass = 'eventGenre page ' + genre.toLowerCase().replace(/ /gi, '').replace('&', '')

        let seatMap = eventPageData.seatmap ? eventPageData.seatmap.staticUrl : ''
        function clickSeatMapButton() {
            window.open(seatMap) 
        }

        let tickets = eventPageData.outlets ? eventPageData.outlets[0].url : ''
        function clickTicketsButton() {
            window.open(tickets)
        }

        // subgenres
        let altGenre = eventPageData.classifications[0].genre ? eventPageData.classifications[0].genre.name.toUpperCase() : ''
        let subGenre = eventPageData.classifications[0].subGenre ? eventPageData.classifications[0].subGenre.name.toUpperCase() : ''
        if (altGenre === subGenre || subGenre === 'UNDEFINED') subGenre = ''



        const displaySubGenre = subGenre === '' ? null : <div className={genreClass}>{subGenre}</div>
        return (
            <div className='eventPage'>
                <div className="left">
                    <img className='eventPageImage' src={eventPageData.images[0].url} />
                    <div className='eventPageDescription'>
                        <div className="eventPageButtons">
                            <button className='eventPageButton' onClick={clickSeatMapButton} disabled={!seatMap}>View Seat Map</button>
                            <button className='eventPageButton' onClick={clickTicketsButton} disabled={!tickets}>Buy Tickets</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="eventPageId">
                        <div className="eventInformation page">
                            <div className={genreClass}>{genre}</div>
                            <div className='eventName page'>{name}</div>
                            <h4 className="eventHeader page">Date:</h4>
                            <div className='eventDate page'>{eventDateAndTime}</div>
                            <div className="extraGenres page">
                                <div className={genreClass}>{altGenre}</div>
                                {displaySubGenre}
                            </div>
                        </div>
                    </div>
                    <div className="eventPageLocation">
                        <div className="eventInformation page loc">
                            <h3 className="">Event Location: </h3>
                            <div>{venue}</div>
                            <div>{addressLine1}</div>
                            <div>{addressLine2}</div>
                            <div>{location}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//-----------------------------------------------------------------

//OLD CODE 

// export default function EventPage() {
//     let [eventPageData, setEventPageData] = useState({}) //eventData always going to be an object
//     document.title = `${eventPageData.name}` //here is to show on the tab the name of the event

//     let params = useParams() //its going to look at the params in our path.
//     console.log(params)


//     //Now, I am going to do a fetch, it means that everytime that I click on event on my page it is going to
//     //fetch to an especific event and show in my 'new eventpage'

//     let id = params.id


//     let url = 'https://app.ticketmaster.com' + '/discovery/v2/events/' + id + '?locale=en-us' + '&apikey=' + key


//     useEffect(() => {
//         axios.get(url)
//             .then(r => setEventPageData(r.data))
//     }, [])


//     //-----------------------------------------------------------------------


//     if (!eventPageData.name) return null //it always have to be above the return. If there is no data it shows null. it is going to show a blank page if there is no data
//     return (
//         <div className='eventPage'>
//             <div className="left">
//                 <img className='eventPageImage' src={eventPageData.images[0].url} />
//                 <div className='eventPageDescription'>something something something</div>
//             </div>
//             <div className="right"> 
//                 <div className="eventPageId">Something</div>
//                 <div className="eventPageLocation">Something</div>
//             </div>
//         </div>

//     )
// }