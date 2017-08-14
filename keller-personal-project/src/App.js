import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import Profile from './Profile';
import Welcome from './Welcome';
import Workouts from './Workouts';
import Results from './Results';
import Meals from './Meals';
import './App.css';
import router from './router';

// import './server';


class App extends Component {

  render() { 
    return (
      <HashRouter>
      <div className="App">
        <div className="App-header">
          <nav className="nav-bar">
            <ul>
              <Link to='/profile'>Profile</Link>
              <Link to='/results'>Results Tracker</Link>
              <Link to='/meals'>Meal Plans</Link>
            </ul>
          </nav>
          <div>
            <Route  path='/profile' component={Profile} />  

           <Switch> 
             {/* <Route path='/workouts' component={Workouts} />  */}
             <Route path='/results' component={Results} />
             <Route path='/meals' component={Meals} />  
            </Switch> 
          </div>
        </div>
       
         <p className="App-intro">
          Welcome to your online Personal Trainer
          <p>
          <a href="http://localhost:3005/auth"><button className="log-me-in"> Login</button></a>
          </p>
        </p>  
      </div>
      </HashRouter>
    );
  }
}

      
    

export default App;

// {this.state.loggedin ? "someclass" : "someotherclass"}