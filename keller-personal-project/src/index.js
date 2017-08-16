import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from './App';
// import Workouts from './Workouts';
// import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// import store from './store';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    
, document.getElementById('root'));
// registerServiceWorker();
