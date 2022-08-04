import { Route, Routes} from 'react-router-dom';
import key from '../../key';
//even though we write everything on the scss file we still import the css file
import  React, {useEffect, useState} from 'react';
import axios from 'axios'


function App() {

let [eventData, setEventData] = useState([])

  let url = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + key


  useEffect(() => {
    axios.get(url)
    .then(r => setEventData(r.data))
  },[]) 



  return (
  <div> 
    {/* anything we put up here will display in all the pages no matter what. The same thing apply below the routes as well */}
    <div>festinha</div>
    <Routes>
      
    </Routes>
      <div>footer</div>
    </div>

  );
}

export default App;
