import './App.css';
import React from 'react';

import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Art from './pages/Art.js';
import Research from './pages/Research.js';
import Covid from './pages/covid/Covid.js'
import Slums from './pages/slums/Slums.js'
// import CV from "./assets/CV.pdf"

const App = () => { 
    return <Router>
        <Route exact path='/'               component={Home}/>
        <Route exact path='/art'            component={Art}/>
        <Route exact path='/research'       component={Research}/>
        <Route exact path='/research/slums' component={Slums}/>
        <Route exact path='/research/covid' component={Covid}/>
        <Route exact path='/CV'>
            <Redirect to={process.env.PUBLIC_URL + "/CV.pdf"}/>
        </Route>
        {/* <Route exact path='/CV.pdf'         component={CV}/> */}
    </Router>
} 
export default App;
