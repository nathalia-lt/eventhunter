import React, { useState } from "react"
import axios from "axios"
import key from "../../key"

export default function Filter({ setEventData }) {

    //update my 'filter' everytime that I click on the category, I need to put a value in my div and them do the event target value

    let [genreFilter, setGenreFilter] = useState('all')


    //----------------------------------------

    //setting the icons to also filter the categories

    let allGenres = ['All', 'Sports', 'Music', 'Theatre', 'Kids']

    let filterCategoriesToDisplay = allGenres.map(genre => {
        let img;
        let genreId;

        switch (genre) {
            default:
            case 'All':
                img = 'https://img.icons8.com/external-neu-royyan-wijaya/512/000000/external-all-neu-development-neu-royyan-wijaya.png'
                genreId = ''
                break
            case 'Music':
                img = 'https://img.icons8.com/small/500/000000/music.png'
                genreId = 'KZFzniwnSyZfZ7v7nJ'
                break
            case 'Sports':
                img = 'https://img.icons8.com/ios/500/000000/football2--v1.png'
                genreId = 'KZFzniwnSyZfZ7v7nE'
                break
            case 'Theatre':
                img = 'https://img.icons8.com/ios/500/000000/movie-projector.png'
                genreId = 'KZFzniwnSyZfZ7v7na'
                break
            case 'Kids':
                img = 'https://img.icons8.com/ios/500/000000/children--v1.png'
                genreId = 'KZFzniwnSyZfZ7v7n1'
                break
        }
        function handleGenreFilterClick() {
            setGenreFilter(genre.toLowerCase())
            // &segmentId='+searchCategory;
            let url = 'https://app.ticketmaster.com/discovery/v2/events.json?&size=12&segmentId=' + genreId + '&apikey=' + key
            axios.get(url) //I needed to fetch my data again to be able to 'filter' the categories
            .then(r => {
                if (r.data._embedded.events) {
                    setEventData(r.data)
                } else { //if I dont get results for my search it is going to alert
                    alert('NO RESULTS')
                }
            })
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
    //search functionality


    let [searchTerm, setSearchTerm] = useState('')

    //then make a text input
    //then I make the function to make it work

    function handleSearchChange(event) {
        setSearchTerm(event.target.value)
    }

    //the we need a submmit, when we type we dont want it to change imediatamente, we want it to change when we press enter

    function handleSearchSubmit(e) {
        e.preventDefault()
        let apiKey = '&apikey=' + key
        let searchUrl = 'https://app.ticketmaster.com/discovery/v2/suggest?&keyword=' + searchTerm + apiKey
        console.log(searchUrl)
        axios.get(searchUrl) //shows in the browser our eventData changed
            .then(r => {
                if (r.data._embedded.events) {
                    setEventData(r.data)
                } else { //if I dont get results for my search it is going to alert
                    alert('NO RESULTS')
                }
            })
    }


    return (
        <div>
            <div className='filter'>
                {filterCategoriesToDisplay}
                <form onSubmit={handleSearchSubmit}>

                    <input
                        className="searchBar"
                        placeholder="search"
                        type='text'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </form>
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