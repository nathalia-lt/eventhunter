import { Route, Routes } from 'react-router-dom';
import './App.css';
import key from '../../key';
//even though we write everything on the scss file we still import the css file



function App() {
  return (
  <div> 
    {/* anything we put up here will display in all the pages no matter what. The same thing apply below the routes as well */}
    <div>festinha</div>
    <Routes>
      <Route path='/info' element={
        <div>informations</div>
      } />
      <Route path='/' element={
        <div>test</div>
      } />
      <Route path='/*' element={
        // the * will display the especifico elemento for all none especifico path
        <div>Home</div>
      } />
    </Routes>
    </div>

  );
}

export default App;
