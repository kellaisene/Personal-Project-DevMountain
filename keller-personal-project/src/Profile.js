import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import Workouts from './Workouts';
import Measurements from './Measurements';
import AddPics from './AddPics';
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

                <div className="page-header">{props.name}</div>
            </div>
        <div className="links">
        <div className="box1">
            
            <Link to='/profile/workouts' >
            <div className="circle1"></div>
             </Link> 

            <p className="start-workout">START Workout</p>
        </div>
        <div className="box2">

            <Link to='/profile/measurements'>
            <div className="circle2"></div>
            </Link>

            <p className="update-measurements">UPDATE Measurements</p>
        </div>
        <div className="box3">
            <Link to='/profile/addpics' >
            <div className="circle3"></div>
            </Link>
            <p className="add-pic">ADD Progress Pic</p>
        </div>
        {/* <div className="recent-activity">
            <h3>Recent Activity</h3> 
        </div> */}
               
        </div>
        <Switch>
              
        </Switch>
        </div>
        </HashRouter>
    )
}
