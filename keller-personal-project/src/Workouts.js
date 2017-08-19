import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Category from './Category';

// class Workouts extends Component{
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }
// render() {
//     this.setState({

//     })
// }
// }


export default function Workouts(props) {
    
    return (
        <div className="workout-page">
            <div className="workout-header">
                Your Workouts
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
            <Route path='/profile/workouts/exercise/:category' render={(props) => (
                 <Category {...props} 
                      user_id={props.user_id}
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

    )
}
