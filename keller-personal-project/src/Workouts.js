import React from 'react';
import {Route, Link} from 'react-router-dom';


export default function Workouts(props) {
    return (
        <div className="workout-page">
            <div className="workout-header">
                <h1>Workouts</h1>
            </div>

            <div className="boxes">
            <div className="input-boxes">
                <h5>Workout Name</h5>
                <h5>Weight</h5>
                <h5>Time</h5>
                <h5>Rest Time</h5>
                
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
