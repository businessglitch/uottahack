import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
 
const Any = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
    static defaultProps = {
      center: {lat: 45.421530, lng: -75.697193},
      zoom: 11
    };
   
    render() {
      return (
        <div className="mapContainer">
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
        </div>
      );
    }
  }

export default SimpleMap;