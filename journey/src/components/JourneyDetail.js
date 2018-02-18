import React, { Component } from 'react';
import './JourneyDetail.css';

class JourneyDetail extends Component {
  render() {
    return (
    <div className="">
        <div className="ui vertical steps">
  			<div className="completed step">
    			<i className="truck icon"></i>
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

