import { Route, Routes} from 'react-router-dom';
import key from '../../key';
//even though we write everything on the scss file we still import the css file
import  React, {useEffect, useState} from 'react';
import axios from 'axios'
import Home from '../Home/Home';
import Header from '../Header/Header';
import EventPage from '../EventPage/EventPage';
import About from '../About/About';
import Favorites from '../Favorites/Favorites';

function App() {

let [eventData, setEventData] = useState([])

  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?&size=12&apikey=' + key
// I add &size=12& to my API to change the number of results on my page

  useEffect(() => {
    axios.get(url)
    .then(r => setEventData(r.data))
  },[])
  
//---------------------------------------------------------------------
//creating a fake favorite page

let [favoritesData, setFavoritesData] = useState([])





  return (
  <div> 
    {/* anything we put up here will display in all the pages no matter what. The same thing apply below the routes as well */}
    <Header
    />
    <hr></hr>
    <Routes>
      <Route path='/*' element={
        <Home 
        eventData={eventData}
        setEventData={setEventData}
        favoritesData={favoritesData}
        setFavoritesData={setFavoritesData}
        />
      }
      />
      <Route path='/about' element={
        <About
        />
      }
      />
      <Route path='/favorites' element={
        <Favorites
        favoritesData={favoritesData}
        setFavoritesData={setFavoritesData}
        />
      }
      />
      <Route exact path='/event/:id' element={ //aqui eu to criando uma nova pagina para cada card que eu clico aparecer as informacoes do card
      <EventPage
       /> //depois eu crio um component chamado eventpage.
      }
      />

    </Routes>
      <hr></hr>
    </div>

  );
}

export default App;
