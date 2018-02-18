import React, { Component } from 'react';
import './JourneyCards.css';

class JourneyCards extends Component {
  render() {
    return (
      <div className="Journey-cards">
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
              <img src={require('../assets/images/adventurePics/enter.jpg')} alt="boohoo" className="img-responsive" />
            </div>
            <div className="content">
              <a className="header">Journey #1</a>
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
              <img src={require('../assets/images/adventurePics/suzyq.jpg')} alt="boohoo" className="img-responsive" />
              {/* <img src="/images/avatar/large/jenny.jpg"> */}
            </div>
            <div className="content">
              <a className="header">Journey #2</a>
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
          <div className="card">
            <div className="blurring dimmable image">
              <div className="ui inverted dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui primary button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src={require('../assets/images/adventurePics/nag.jpg')} alt="boohoo" className="img-responsive" />
              {/* <img src="/images/avatar/large/jenny.jpg"> */}
            </div>
            <div className="content">
              <a className="header">Journey #3</a>
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

