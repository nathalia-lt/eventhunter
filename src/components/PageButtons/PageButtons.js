

export default function PageButtons( {eventData} ){

let pageCount = eventData.page.number + 1
let firstLink = eventData._links.first.href
//let prevLink = eventData._links.prev.href
let nextLink = eventData._links.next.href
let lastLink = eventData._links.last.href


    return(

        <div className="eventContainerCategories">
        <button>First</button>
        <button>Previous</button>
        <div> {pageCount} </div>
        <button>Next</button>
        <button>Last</button>
</div>

    )
}