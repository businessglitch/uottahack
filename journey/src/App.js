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
<<<<<<< HEAD
  constructor(props) {
    super(props);
    
    this.state = {venues: null};
  }

  async callApi() {
    var response = await fetch('/api/venues');
    var body = await response.json();
    console.log(body);
  }

  componentDidMount() {
    this.callApi().then(function(){}).catch(function(){});
  }

=======
 
>>>>>>> 0967992e22c4242e52bb63cc252cebae6aa07496
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
