import React, { useState } from "react"
import axios from "axios"
import key from "../../key"

export default function Filter( {setEventData} ) {

    //update my 'filter' everytime that I click on the category, I need to put a value in my div and them do the event target value

    let [genreFilter, setGenreFilter] = useState('all')


  // KZFzniwnSyZfZ7v7nJ - Music
    // KZFzniwnSyZfZ7v7nE - Sports
    // KZFzniwnSyZfZ7v7na - Arts & Theatre

    //----------------------------------------

    //setting the icons to also filter the categories

    let allGenres = ['All', 'Sports', 'Music', 'Theater', 'Kids']

    let filterCategoriesToDisplay = allGenres.map(genre => {
        let img;
        let genreId;

        switch (genre) {
            default:
                case 'All':
                img = 'https://img.icons8.com/small/500/000000/music.png'
                genreId =''
                break
            case 'Music':
                img = 'https://img.icons8.com/small/500/000000/music.png'
                genreId ='KZFzniwnSyZfZ7v7nJ'
                break
            case 'Sports':
                img = 'https://img.icons8.com/ios/500/000000/football2--v1.png'
                genreId= 'KZFzniwnSyZfZ7v7nE'
                break
            case 'Theater':
                img = 'https://img.icons8.com/ios/500/000000/movie-projector.png'
                genreId = 'KZFzniwnSyZfZ7v7na'
                break
            case 'Kids':
                img = 'https://img.icons8.com/ios/500/000000/kiss-panda--v1.png'
                genreId = ''
                break
        }
        function handleGenreFilterClick() {
            setGenreFilter(genre.toLowerCase())
            // &segmentId='+searchCategory;
            let url = 'https://app.ticketmaster.com/discovery/v2/events.json?&size=12&segmentId='+ genreId +'&apikey=' + key
            axios.get(url) //I needed to fetch my data again to be able to 'filter' the categories
                .then(r => setEventData(r.data))
        }
        //quando eu clico na categoria muda de cor e permanece a mesma cor da categoria selecionada
        const filterClass = genreFilter === genre.toLowerCase() ? 'eventCategory selected' : 'eventCategory'
        //it is going to check if genre is equal to the genre that I selected, if yes it is going
        //to apply te selected category (the one in scss). If not its going to be normal tab
        return (
            <div className={filterClass}>
                <img onClick={handleGenreFilterClick} src={img} alt='' />
                <div onClick={handleGenreFilterClick} >{genre}</div>
            </div>
        )
    })

    //-----------------------------------------------





    return (
        <div>
        <div className='eventContainerCategories'>
            {filterCategoriesToDisplay}

        </div>
        
            {/* <div className="eventCategory">
                <img src="https://img.icons8.com/small/500/000000/music.png" />
                <div onClick={handleGenreFilterClick} >Music</div>
            </div>
            <div className="eventCategory">
                <img src="https://img.icons8.com/ios/500/000000/football2--v1.png" />
                <div onClick={handleGenreFilterClick} >Sports</div>
            </div>
            <div className="eventCategory">
                <img src="https://img.icons8.com/ios/500/000000/movie-projector.png" />
                <div onClick={handleGenreFilterClick} >Theater</div>
            </div>
            <div className="eventCategory">
                <img src="https://img.icons8.com/ios/500/000000/kiss-panda--v1.png" />
                <div onClick={handleGenreFilterClick} >Kids</div>
            </div> */}
        </div>
    )
}