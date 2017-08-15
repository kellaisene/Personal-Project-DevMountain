  import React from 'react';
  import './Home.css';
  import './App.js';

  export default function Home(props) {

    
      return(
          <div className="home-page">
          
          <p className="home-message">
          SLOW PROGRESS IS BETTER THAN NO PROGRESS
          <p>
          {/* <a href="http://localhost:3005/auth"><button className="log-me-in"> Login</button></a> */}
          </p>
        </p>   
        <div className="logout">
           <a href="https://kelljohnson.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000"> <h2>Log Out</h2></a>
        </div>
       {/* </div>  */}
    </div>
      )
  }