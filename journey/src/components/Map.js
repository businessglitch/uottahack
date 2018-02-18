import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentDidUpdate() {
    console.log(this.props.start)
    //this.props.google.maps.event.trigger(map, 'resize');
  }

  render() {
      return (
        <Map
        style={{width: this.props.width || '500px', height: this.props.height || '500px'}}
        google={this.props.google}
        initialCenter={this.props.start || {lat: 45.421530, lng: -75.697193}}
        zoom={15}>
          <Marker name={'Starting Point'} position={this.props.start || {lat: 45.421530, lng: -75.697193}} />
          <Marker name={'End Point'} position={this.props.end || {lat: 45.421330, lng: -75.697293}} />
        </Map>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBGe2aketOnphR_JDoDkyqSC13GppFxCYo'
})(MapContainer);
