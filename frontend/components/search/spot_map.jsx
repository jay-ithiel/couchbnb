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
    const spotsArray = Object.values(this.props.spots);
    this.MarkerManager.updateMarkers();
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers();
  }

  render() {
    return (
      <div id='map-container' ref='map'>

      </div>
    );
  }
}

export default SpotMap;
