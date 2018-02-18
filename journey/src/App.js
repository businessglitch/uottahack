import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Map from './components/Map.js';
import JourneyCards from './components/JourneyCards.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  async callApi() {
    var response = await fetch('/api/venues');
    var body = await response.json();
  }

  componentDidMount() {
    this.callApi()
      .then(function(){})
      .catch(function(){});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Map} />
          <Route path="/JourneyCards" component={JourneyCards} />
        </Switch>
      </div>
    );
  }
}


export default App;
