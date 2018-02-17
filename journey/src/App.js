import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
        </p>
        <iframe src='https://giphy.com/embed/bWqNM7zzqSu2Y' width="1080" height="1080" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    );
  }
}

export default App;
