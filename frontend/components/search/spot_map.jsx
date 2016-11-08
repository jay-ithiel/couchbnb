import React from 'react';
import MarkerManager from '../../util/marker_manager.js';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers();
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers();
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        I am map-container
      </div>
    );
  }
}

export default SpotMap;
