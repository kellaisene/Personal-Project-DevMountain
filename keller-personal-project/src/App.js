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
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ReactFontFace from 'react-font-face';



// import server from './server';

// import 'bootstrap/dist/css/bootstrap.css';
// import ReactDataGrid from 'react-data-grid/addons';
// var React = require('react');
// var ReactDataGrid = require('react-data-grid/addons');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedin: [],
      weights: {}
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
    // const weights = this.props.weights.map((weight, i) => (
    //   <div key={i}>{weight.name}</div>
    // ))
    // console.log(this.state)
    return (
      <Router>
      <div style={{background: this.state.loggedin ? "none" : true}}className="App">
        <div style={{display: this.state.loggedin ? "block" : "none"}} className="App-header">
          <div className="nav-bar">
            <ul>
              <Link to='/home'>Home </Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/results'>Results Tracker</Link>
              <Link to='/meals'>Meal Plans</Link>
            </ul>
          <div className='component-pages'>
              

                <Route exact path='/home' component={Home} />   
           <Switch> 
                <Route exact path='/profile' render={(props) => (
                 <Profile {...props} 
                      profile_pic={this.state.loggedin.profile_pic}
                      name={this.state.loggedin.name} 
                      gender={this.state.loggedin.gender}
                      user_id={this.state.loggedin.user_id}
                      />
                      )} /> 
                <Route path='/profile/workouts' render={(props) => (
                 <Workouts {...props} 
                      user_id={this.state.loggedin.user_id}
                      />
                      )} />  
                <Route path='/profile/measurements' component={Measurements} /> 
                <Route path='/results' component={Results} />
                <Route path='/meals' component={Meals} />   
            </Switch> 
        </div>
          </div>
          </div>

            <div style={{display: this.state.loggedin ? "none" : "block"}}>
         <p className="App-intro">
           <div className="maliu-mai">
          Welcome to your online Personal Trainer
          </div>
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
{/* <Route path='/profile/workouts' render={(props) => (
                  <Workouts {...props}
                      name={this.state.name} /> 
                )}/> */}