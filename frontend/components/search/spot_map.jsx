import React from 'react';
import MarkerManager from '../../util/marker_manager.js';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);

    // this._registerListeners = this._registerListeners.bind(this);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  _registerListeners() {
    let self = this;
    google.maps.event.addListener(this.map, 'idle', () => {

      const { north, south, east, west } = self.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
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
