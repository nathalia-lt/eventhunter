import EventContainer from "../EventContainer/EventContainer";


export default function Favorites( {favoritesData, setFavoritesData} ){
    return(
        <div>
            <EventContainer
            eventData={favoritesData}
            favoritesData={favoritesData}
            setFavoritesData={setFavoritesData}
            />
        </div>
    )
}