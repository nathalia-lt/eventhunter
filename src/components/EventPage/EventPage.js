import { useParams } from "react-router-dom"
import axios from "axios"
import key from "../../key"
import React, { useEffect, useState } from "react"


export default function EventPage() {
    let [eventPageData, setEventPageData] = useState({}) //eventData always going to be an object
    document.title = `${eventPageData.name}` //here is to show on the tab the name of the event

    let params = useParams() //its going to look at the params in our path.
    console.log(params)


    //Now, I am going to do a fetch, it means that everytime that I click on event on my page it is going to
    //fetch to an especific event and show in my 'new eventpage'

    let id = params.id


    let url = 'https://app.ticketmaster.com' + '/discovery/v2/events/' + id + '?locale=en-us' + '&apikey=' + key


    useEffect(() => {
        axios.get(url)
            .then(r => setEventPageData(r.data))
    }, [])


    //-----------------------------------------------------------------------

    



    if (!eventPageData.name) return null //it always have to be above the return. If there is no data it shows null. it is going to show a blank page if there is no data
    return (
        <div className='eventPage'>
            <div className="left">
                <img className='eventPageImage' src={eventPageData.images[0].url} />
                <div className='eventPageDescription'>something something something</div>
            </div>
            <div className="right"> 
                <div className="eventPageId">Something</div>
                <div className="eventPageLocation">Something</div>
            </div>
        </div>

    )
}