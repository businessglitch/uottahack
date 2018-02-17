import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          This is the bullshit that we add in the intro
        </p>
      </div>
    );
  }
}

export default App;
