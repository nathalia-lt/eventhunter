import React, { useState } from "react"

export default function Filter() {

    //update my 'filter' everytime that I click on the category, I need to put a value in my div and them do the event target value

    let [genreFilter, setGenreFilter] = useState('all')



//----------------------------------------

    //setting the icons to also filter the categories

    let allGenres = ['All', 'Sports', 'Music', 'Theater', 'kids']

    let filterCategoriesToDisplay = allGenres.map(genre => {
        let img;
        function handleGenreFilterClick() {
            setGenreFilter(genre.toLowerCase())
        }
        switch (genre) {
            default:
            case 'Music':
                img = 'https://img.icons8.com/small/500/000000/music.png'
                break
            case 'Sports':
                img = 'https://img.icons8.com/ios/500/000000/football2--v1.png'
                break
            case 'Theater':
                img = 'https://img.icons8.com/ios/500/000000/movie-projector.png'
                break
            case 'Kids':
                img = 'https://img.icons8.com/ios/500/000000/kiss-panda--v1.png'
                break
        }
        return (
            <div className="eventCategory">
                <img onClick={handleGenreFilterClick} src={img} alt=''/>
                <div onClick={handleGenreFilterClick} >{genre}</div>
            </div>
        )
    })

    return (
        <div className='eventContainerCategories'>
            {filterCategoriesToDisplay}

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