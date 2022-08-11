import EventContainer from "../EventContainer/EventContainer";


export default function Favorites( {favoritesData, setFavoritesData} ){
    document.title = 'Favorites Events'
    return(
        <div>
            <h1 className='favoriteTitle' > Your Favorite Events </h1>
            <EventContainer
            eventData={favoritesData}
            favoritesData={favoritesData}
            setFavoritesData={setFavoritesData}
            />
        </div>
    )
}