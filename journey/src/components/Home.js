import React, { Component } from 'react';
import './Home.css';
import Header from './header.js';

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
		        <button onClick={this.startJourney} className=" center Home-button massive ui  blue button">START JOURNEY</button>
	      	</div>
	      	);
  	}
}

export default Home;
