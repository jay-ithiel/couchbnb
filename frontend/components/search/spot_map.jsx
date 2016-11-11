import React from 'react';
import MarkerManager from '../../util/marker_manager.js';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);

    // this._registerListeners = this._registerListeners.bind(this);
    this.map = null;
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.state = {
      location: {}
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
    this._moveToLocation = this._moveToLocation.bind(this);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.location).length > 0 && this.state.location !== this.props.location) {
      this.state.location = this.props.location;

      let lat = this.props.location.lat;
      let lng = this.props.location.lng;

      this._moveToLocation(lat, lng);
    }
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  _moveToLocation(lat, lng) {
    let center = new google.maps.LatLng(lat, lng);
    this.map.panTo(center);
    this.map.setZoom(13);
  }

  _registerListeners() {
    let self = this;
    google.maps.event.addListener(this.map, 'idle', () => {

      const { north, south, east, west } = self.map.getBounds().toJSON();
      const bounds = {
        northeast: { lat: north, lng: east },
        southwest: { lat: south, lng: west }
      };

      self.props.requestSpots();
      self.props.updateBounds(bounds);
    });
  }

  render() {
    return (
      <div id='map-container' ref='map'>

      </div>
    );
  }
}

export default SpotMap;
