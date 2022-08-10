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
        .then(r => {
            if (r.data._embedded.events) {
                setEventData(r.data)
            } else { //if I dont get results for my search it is going to alert
                alert('NO RESULTS')
            }
        })
    }

    function nextButtonClick() {
        let newUrl = url + nextLink + apiKey
        axios.get(newUrl) 
            .then(r => {
                if (r.data._embedded.events) {
                    setEventData(r.data)
                } else { //if I dont get results for my search it is going to alert
                    alert('NO RESULTS')
                }
            })
    }

    function previousButtonClick() {
        let newUrl = url + prevLink + apiKey
        axios.get(newUrl) 
        .then(r => {
            if (r.data._embedded.events) {
                setEventData(r.data)
            } else { //if I dont get results for my search it is going to alert
                alert('NO RESULTS')
            }
        })
    }

    return (

        <div className="pageButtons">
            {/* <button className= 'pageButton' onClick={firstButtonClick} >First</button> */}
            <button className= 'pageButton' disabled={!prevLink} onClick={previousButtonClick} >Prev</button>
            <div className= 'pageButton text' > {pageCount} </div>
            <button className= 'pageButton' onClick={nextButtonClick} >Next</button>
        </div>
    )
}