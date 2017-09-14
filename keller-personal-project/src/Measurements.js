import React from 'react';
import {Link} from 'react-router-dom';


export default function Measurements(props) {
    return (
        <div className="measurements-page">
            <div className="measurement-header">
                <h1>Measure yourself</h1>
                <Link to="/profile">BACK
                </Link>
            </div>

        </div>

    )
}
