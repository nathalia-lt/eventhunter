import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter as Router} from 'react-router-dom';
//I rename BrowserRouter as Router in this way I can use the name Router instead BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

