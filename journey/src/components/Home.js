import React, { Component } from 'react';
import './Home.css';
import Header from './header.js';
import {
  Link
} from 'react-router-dom';

class Home extends Component {
	startJourney() {
    	console.log("startJourney");
  	}

  	render() {
  		return(
	        <div className="Home centered">
		        	<Header />
			        <p className="Home-intro">
			          Are you ready to go on a journey ?
			        </p>
		        <Link to="/JourneyCards"><button onClick={this.startJourney} className="Home-button massive ui blue button">START JOURNEY</button></Link>
	      	</div>
	      	);
  	}
}

export default Home;
