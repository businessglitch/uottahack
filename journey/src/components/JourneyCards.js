import React, { Component } from 'react';
import './JourneyCards.css';
import Journeys from '../assets/mocks/journeys.js';
import {
  Link
} from 'react-router-dom';

class JourneyCards extends Component {
	createJourneyCards() {
		console.log(Journeys[0]["1"]);
	}
	render() {
	    return (
		    <div  className="Header-title">
		        <div className="ui special cards">
		        { Journeys.map((item, i) => (    
			  			<div  key={i} className="card">
			  				<img src={item["image"]} alt="boohoo" className="img-responsive" />
			    			<div className="content">
			      				<a className="header">Journey #{i+1}</a>
			     				<div className="meta">
			        				<span className="date">Duration: {item["duration"]}</span><br></br>
			        				<span className="date">Difficulty: {item["difficulty"]}</span><br></br>
			        				<span className="date">Budget: {item["budget"]}</span>
			        			</div>
			    			</div>
			    			<Link to={"/JourneyDetail/" + i}><button onClick={this.createJourneyCards} className="ui blue button">START JOURNEY</button></Link>
				    		<div className="extra content">
				      			<a><i className="users icon"></i>{item["members"]} Members</a>
				    		</div>
			  			</div>
		  			))}
				</div>
		    </div>
	    );
	}
}

export default JourneyCards;

