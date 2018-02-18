import React, { Component } from 'react';
import './JourneyCards.css';

class JourneyCards extends Component {
  render() {
    return (
      <div className="Header-title">
        <h1>JourneyCards BITCHES</h1>
        <div className="ui special cards">
  <div className="card">
    <div className="blurring dimmable image">
      <div className="ui dimmer">
        <div className="content">
          <div className="center">
            <div className="ui inverted button">Add Friend</div>
          </div>
        </div>
      </div>
      {/* <img src="/images/avatar/large/elliot.jpg"> */}
    </div>
    <div className="content">
      <a className="header">Team Fu</a>
      <div className="meta">
        <span className="date">Create in Sep 2014</span>
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="users icon"></i>
        2 Members
      </a>
    </div>
  </div>
  <div className="card">
    <div className="blurring dimmable image">
      <div className="ui inverted dimmer">
        <div className="content">
          <div className="center">
            <div className="ui primary button">Add Friend</div>
          </div>
        </div>
      </div>
      {/* <img src="../assets/images/beavertails.jpg" alt="boohoo" className="img-responsive"/> */}
      {/* <img src="/images/avatar/large/jenny.jpg"> */}
    </div>
    <div className="content">
      <a className="header">Team Hess</a>
      <div className="meta">
        <span className="date">Create in Aug 2014</span>
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="users icon"></i>
        2 Members
      </a>
    </div>
  </div>
</div>

      </div>
    );
  }
}

export default JourneyCards;

