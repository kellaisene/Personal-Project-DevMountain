import React from 'react';
import ReactDOM from 'react-dom';


export default function Welcome(props) {
    return (
        <div className="Welcome-page">
            
            <h1 className='welcome'></h1>
            <br></br>
            <p className="App-intro">
          Welcome to your online Personal Trainer
          <p>
          <a href="http://localhost:3005/auth"><button> Login </button></a>
          </p>
        </p>
            </div>   

    )

    
}