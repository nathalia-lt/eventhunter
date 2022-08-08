import key from "../../key"
import axios from "axios"

export default function PageButtons({ eventData, setEventData }) {

    let pageCount = eventData.page.number + 1
    let firstLink = eventData._links.first.href
    let prevLink = eventData._links.prev ? eventData._links.prev.href : null //check to see if previus exist in out current page
    let nextLink = eventData._links.next.href
    let url = 'https://app.ticketmaster.com'
    let apiKey = '&apikey=' + key

    function firstButtonClick() {
        let newUrl = url + firstLink + apiKey
        axios.get(newUrl) 
            .then(r => setEventData(r.data))
    }

    function nextButtonClick() {
        let newUrl = url + nextLink + apiKey
        axios.get(newUrl) 
            .then(r => setEventData(r.data))
    }

    function previousButtonClick() {
        let newUrl = url + prevLink + apiKey
        axios.get(newUrl) 
            .then(r => setEventData(r.data))
    }

    return (

        <div className="pageButtonsContainer">
            <button onClick={firstButtonClick} >First</button>
            <button disabled={!prevLink} onClick={previousButtonClick} >Previous</button>
            <div> {pageCount} </div>
            <button onClick={nextButtonClick} >Next</button>
        </div>

    )
}