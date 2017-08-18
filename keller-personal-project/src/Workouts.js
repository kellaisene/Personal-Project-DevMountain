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
                <h1>Workouts</h1>
            </div>

            <div className="boxes">
            <div className="input-boxes">
                <h5>Select a Workout</h5>
                {/* <h5>Workout Name</h5>
                <h5>Weight</h5>
                <h5>Time</h5>
                <h5>Rest Time</h5>
                <h5>Set</h5> */}
                
            <Route path='/profile/workouts/exercise/:category' render={(props) => (
                 <Category {...props} 
                      user_id={props.user_id}
                      />
                      )} /> 
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
