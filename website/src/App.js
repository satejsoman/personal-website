import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Art from './pages/Art.js';
import Research from './pages/Research.js';

function App() {
  return (
    <Router>
        <Route exact path='/'         component={Home}/>
        <Route exact path='/art'      component={Art}/>
        <Route exact path='/research' component={Research}/>
    </Router>
  );
}

export default App;
