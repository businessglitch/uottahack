import React, { Component } from 'react';
import './JourneyDetail.css';
import Journeys from '../assets/mocks/journeys.js';
import {
  Link
} from 'react-router-dom';

class JourneyDetail extends Component {
  render() {
    return (
    <div>
        <div className="ui vertical steps">
        {Journeys.ma}
  			<div className="step">
    			<div className="content">
      				<div className="title">Shipping</div>
      				<div className="description">Choose your shipping options</div>
    			</div>
  			</div>
  			<div className="completed step">
    			<i className="credit card icon"></i>
   				<div className="content">
      				<div className="title">Billing</div>
      				<div className="description">Enter billing information</div>
    			</div>
  			</div>
  			<div className="active step">
    			<i className="info icon"></i>
    			<div className="content">
				   	<div className="title">Confirm Order</div>
				    <div className="description">Verify order details</div>
    			</div>
  			</div>
		</div>
    </div>
    );
  }
}

export default JourneyDetail;

