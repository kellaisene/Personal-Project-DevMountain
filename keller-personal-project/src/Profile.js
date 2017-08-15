import React from 'react';
// import {Route, Link} from 'react-router-dom';
import './Profile.css';


export default function Profile(props) {

        console.log(props)
    return (
        <div className="profile-page">
            <div className="profile-pic">
                <img src={props.profile_pic} 
                    height={200}
                    width={200}/>

                <h5 className="page-header">{props.name}</h5>
            </div>
        <div className="links">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="recent-activity"></div>
        </div>

        </div>

    )
}
