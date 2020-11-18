import './App.css';
import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Art from './pages/Art.js';
import Research from './pages/Research.js';
import Covid from './pages/covid/Covid.js'
import Slums from './pages/slums/Slums.js'


const App = () => { 
    return <Router>
        <Route exact path='/'               component={Home}/>
        <Route exact path='/art'            component={Art}/>
        <Route exact path='/research'       component={Research}/>
        <Route exact path='/research/slums' component={Slums}/>
        <Route exact path='/research/covid' component={Covid}/>
    </Router>
} 
export default App;
