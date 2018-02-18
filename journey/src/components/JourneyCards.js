import React, { Component } from 'react';
import './JourneyCards.css';
import './skeleton.css'
import Journeys from '../assets/mocks/journeys.js';
import {
  Link
} from 'react-router-dom';

class JourneyCards extends Component {
	render() {
	    return (
		    <div  className="Header-title">
            <div className="row">
              <h2>Choose your journey</h2>
            </div>
		        <div className="ui special cards row">
		        { Journeys.map((item, i) => (
            <div className="four columns">
              <Link to={"/JourneyDetail/" + i}>
    			  			<div  key={i} className="card">
    			    			<div className="content">
    			      				<h5><strong>Journey #{i+1}</strong></h5>
    			     				<div className="meta">
    			        				<span className="date">Duration: {item["duration"]}</span><br></br>
    			        				<span className="date">Difficulty: {item["difficulty"]}</span><br></br>
    			        				<span className="date">Budget: {item["budget"]}</span>
    			        			</div>
    			    			</div>
    				    		<div className="extra content">
    				      			<span><i className="users icon"></i>{item["members"]} Members</span>
    				    		</div>
    			  			</div>
                </Link>
              </div>
		  			))}
				</div>
		    </div>
	    );
	}
}

export default JourneyCards;
