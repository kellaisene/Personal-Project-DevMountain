import React, {Component} from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Category from './Category';


export default function Workouts(props) {
    console.log("workouts", props.user_id)
    let test = props.user_id
    return (
        <Router>
        <div className="workout-page">
            <div className="workout-header">
                YOUR WORKOUTS
            </div>

            <div className="boxes">
            <div className="input-boxes">
                <div className="select-workout">Select a Workout</div>
                <div className="select-workout-box">
            <div className="select-category">
               
               <Link to='/profile/workouts/exercise/upper'> <li>Upper Body</li></Link>
               <Link to='/profile/workouts/exercise/lower'> <li>Lower Body</li></Link>
               <Link to='/profile/workouts/exercise/cardio'> <li>Cardio</li></Link>
              
            </div>
                </div>
                <div>
            <Route exact path='/profile/workouts/exercise/:category' render={(props) => (
                    
                 <Category {...props} 
                     user_id = {test}
                      />
                      
                      )} />
                </div>
            </div>
            <div className="workout-summary">

                </div>

            </div>
            
            <div className="backbutton-format">
            <div className="back-button">
                
                <Link to="/profile">BACK
                </Link>
            </div>
            </div>

        </div>
</Router>
    )
}
