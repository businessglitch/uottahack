import React, { Component } from 'react';
import './JourneyDetail.css';
import Journeys from '../assets/mocks/journeys.js';
import MapContainer from './Map.js';
import {
  Link
} from 'react-router-dom';

class JourneyDetail extends Component {
	 constructor(props) {
	    super(props);
	    this.state = { 
	    	journey: Journeys[this.props.match.params.id],
	    	start: {
	    		lat: 0, 
	    		lng: 0
	    	}
	    };
	  }

	setLocation(templat,templon) {
		
		this.setState({
            start: {
            	lat: templat,
            	lng: templon
            } 
        });
        console.log(this.state.start);
	}

	componentDidMount() {
		//console.log(this.state.journey)
	}
  	render() {

		    return (
		    	<div>
		        	<div className="ui vertical steps">
				        {this.state.journey.events.map((item,i) => (
							<div key={i} className="step">
				    			<div onClick={() => this.setLocation(item.venue.lat, item.venue.lon)} className="content">
				      				<div className="title">{item.name}</div>
				      				<div className="description">{"Location:" + item.venue.name + item.venue.address_1}</div>
									<div className="description">{"Time:" + item.local_time}</div>
				    			</div>
				  			</div>
				        ))}	
					</div>
					<div className="Map-container">
						<MapContainer start={this.state.start} />
					</div>
		     	</div>
		    );
		}
  	}

export default JourneyDetail;

