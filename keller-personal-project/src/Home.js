  import React from 'react';
//   import './Home.css';
//   import './App.js';

  export default function Home(props) {

    
      return(
          <div className="home-page">
          
          <p className="home-message">
          SLOW PROGRESS IS BETTER THAN NO PROGRESS.
          <p>
          {/* <a href="http://localhost:3005/auth"><button className="log-me-in"> Login</button></a> */}
          </p>
        </p>   
        <div className="logout">
           <a href="https://kelljohnson.auth0.com/logout?federated"><button className="logout-button">Log Out</button></a>
        </div>
       {/* </div>  */}
    </div>
      )
  }