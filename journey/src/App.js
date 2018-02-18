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
import JourneyDetail from './components/JourneyDetail.js';


class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/JourneyCards" component={JourneyCards} />
                <Route path="/JourneyDetail" component={JourneyDetail} />
            </div>
        </Router>
      </div>
    );
  }
}


export default App;
