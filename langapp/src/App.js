import React, { Component } from 'react';
import logo from './samoa_logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Talofa!</h1>
        </header>
        <p className="App-intro">
          Welcome to the Samoan Language App!
        </p>
      </div>
    );
  }
}

export default App;
