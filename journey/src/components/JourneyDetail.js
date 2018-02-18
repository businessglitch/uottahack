import React, { Component } from 'react';
import './JourneyDetail.css';
import Journeys from '../assets/mocks/journeys.js';
import {
  Link
} from 'react-router-dom';

class JourneyDetail extends Component {
	constructor(props) {
		super(props);

	    this.state = { journey: Journeys[this.props.match.params.id]};
	}

	getCoordinate(lat, lon) {
		console.log(lat + ' ' + lon);
	}

	componentDidMount() {
		this.setState({
            journey: Journeys[this.props.match.params.id]
        });
		//console.log(this.state.journey)
	}
  	render() {
		    return (
		    	<div>
		        	<div className="ui vertical steps">
				        {this.state.journey.events.map((item,i) => (
							<div key={i} className="step" onClick={this.getCoordinate(item.venue.lat, item.venue.lon).bind(this)}>
				    			<div className="content">
				      				<div className="title">{item.name}</div>
				      				<div className="description">{"Location:" + item.venue.name + item.venue.address_1}</div>
									<div className="description">{"Time:" + item.local_time}</div>
				    			</div>
				  			</div>
				        ))}	
					</div>
		     	</div>
		    );
		}
  	}

export default JourneyDetail;

