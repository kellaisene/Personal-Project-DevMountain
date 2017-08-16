import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import Workouts from './Workouts';
import Measurements from './Measurements';
// import './Profile.css';



export default function Profile(props) {

        console.log(props)
    return (
        <HashRouter>
        <div className="profile-page">
            <div className="profile-pic">
                <img src={props.profile_pic} 
                    height={200}
                    width={200}/>

                <h4 className="page-header">{props.name}</h4>
            </div>
        <div className="links">
        <div className="box1">
            
            <Link to='/profile/workouts' >
            <div className="circle1"></div>
             </Link> 

            <p className="start-workout">Start Workout</p>
        </div>
        <div className="box2">

            <Link to='/profile/measurements'>
            <div className="circle2"></div>
            </Link>

            <p className="update-measurements">Update Measurements</p>
        </div>
        <div className="box3">
            <div className="circle3"></div>
            <p className="add-pic">Add Progress Pic</p>
        </div>
        <div className="recent-activity"></div>
        </div>
        <Switch>
              
        </Switch>
        </div>
        </HashRouter>
    )
}
