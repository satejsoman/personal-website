import './App.css';
import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Art from './pages/Art.js';
import Research from './pages/Research.js';
import Covid from './pages/covid/Covid.js'
import Slums from './pages/slums/Slums.js'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const googleAnalyticsId = "G-DV45FC0XBC";
ReactGA.initialize(googleAnalyticsId);

const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = (_) =>
<Router history = {history}>
    <Route exact path='/'               component={Home}/>
    <Route exact path='/art'            component={Art}/>
    <Route exact path='/research'       component={Research}/>
    <Route exact path='/research/slums' component={Slums}/>
    <Route exact path='/research/covid' component={Covid}/>
</Router>

export default App;
