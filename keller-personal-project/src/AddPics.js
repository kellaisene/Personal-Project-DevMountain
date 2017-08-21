import React from 'react';
import {Route, Link} from 'react-router-dom';


export default function AddPics(props) {
    return (
        <div className="pics-page">
            <div className="pics-header">
                <h1>Add Pics!</h1>
                <Link to="/profile">BACK
                </Link>
            </div>

        </div>

    )
}