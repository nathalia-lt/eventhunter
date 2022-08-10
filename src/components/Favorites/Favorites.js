import EventContainer from "../EventContainer/EventContainer";


export default function Favorites( {favoritesData, setFavoritesData} ){
    return(
        <div>
            <h1 className='favoriteTitle' > Your Favorites Events </h1>
            <EventContainer
            eventData={favoritesData}
            favoritesData={favoritesData}
            setFavoritesData={setFavoritesData}
            />
        </div>
    )
}