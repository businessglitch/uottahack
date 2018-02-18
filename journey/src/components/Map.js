import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Any = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
    static defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    };
   
    render() {
      return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBGe2aketOnphR_JDoDkyqSC13GppFxCYo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Any
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      );
    }
  }

export default Map;