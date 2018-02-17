import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home.js';
import JourneyCards from './components/JourneyCards.js';


class App extends Component {
 
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/JourneyCards" component={JourneyCards} />
        </Switch>
      </div>
    );
  }
}


export default App;
