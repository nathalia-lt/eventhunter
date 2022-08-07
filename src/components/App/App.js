import { Route, Routes} from 'react-router-dom';
import key from '../../key';
//even though we write everything on the scss file we still import the css file
import  React, {useEffect, useState} from 'react';
import axios from 'axios'
import Home from '../Home/Home';

function App() {

let [eventData, setEventData] = useState([])

  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?&size=12&apikey=' + key
// I add &size=12& to my API to change the number of results on my page

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
        setEventData={setEventData}
        />
      }
      />
    </Routes>
    
    </div>

  );
}

export default App;
