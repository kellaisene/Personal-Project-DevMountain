import React, { Component } from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import Home from './Home';
import Profile from './Profile';
import Welcome from './Welcome';
import Workouts from './Workouts';
import Measurements from './Measurements';
import Results from './Results';
import Meals from './Meals';
// import './App.css';
import router from './router';

// import server from './server';


class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedin: []
    };
  }

    componentDidMount() {
      axios.get('/getuser')
      .then( (response) => {
        console.log('response', response)
        this.setState({
          loggedin: response.data
        })
      })
      
    }
  render() { 
    return (
      <Router>
      <div style={{background: this.state.loggedin ? "none" : true}}className="App">
        <div style={{display: this.state.loggedin ? "block" : "none"}} className="App-header">
          <div className="nav-bar">
            <ul>
              <Link to='/home'>Home</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/results'>Results Tracker</Link>
              <Link to='/meals'>Meal Plans</Link>
            </ul>
          </div>
          <div>
              

        </div>
                <Route exact path='/home' component={Home} />   
           <Switch> 
                <Route exact path='/profile' render={(props) => (
                 <Profile {...props} 
                      profile_pic={this.state.loggedin.profile_pic}
                      name={this.state.loggedin.name} 
                      gender={this.state.loggedin.gender}
                      />
                      )} /> 
                <Route path='/profile/workouts' component={Workouts} /> 
                <Route path='/profile/measurements' component={Measurements} /> 
                <Route path='/results' component={Results} />
                <Route path='/meals' component={Meals} />   
            </Switch> 
          </div>

            <div style={{display: this.state.loggedin ? "none" : "block"}}>
         <p className="App-intro">
          Welcome to your online Personal Trainer
          <p>
          <a href="http://localhost:3005/auth"><button className="log-me-in"> Login</button></a>
          </p>
        </p>  
      </div>    
      </div>

      </Router>
    );
  }
}

      
    

export default App;

// {this.state.loggedin ? "someclass" : "someotherclass"}