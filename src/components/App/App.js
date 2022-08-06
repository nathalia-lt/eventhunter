import { Route, Routes} from 'react-router-dom';
import key from '../../key';
//even though we write everything on the scss file we still import the css file
import  React, {useEffect, useState} from 'react';
import axios from 'axios'
import Home from '../Home/Home';


function App() {

let [eventData, setEventData] = useState([])

  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + key

  // KZFzniwnSyZfZ7v7nJ - Music
    // KZFzniwnSyZfZ7v7nE - Sports
    // KZFzniwnSyZfZ7v7na - Arts & Theatre


  useEffect(() => {
    axios.get(url)
    .then(r => setEventData(r.data))
  },[]) 



  return (
  <div> 
    {/* anything we put up here will display in all the pages no matter what. The same thing apply below the routes as well */}
    
    <Routes>
      <Route path='/' element={
        <Home 
        eventData={eventData}
        />
      }
      />
    </Routes>
    
    </div>

  );
}

export default App;
