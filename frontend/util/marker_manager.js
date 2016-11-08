export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];

    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
  }

  updateMarkers(spots) {
    this.spots = spots;
    this._benchesToAdd().forEach(this._createMarkerFromBench);
  }

  _benchesToAdd() {
    if (this.spots === undefined) { return []; }
    const currentSpots = this.markers.map( marker => marker.spotId );

    // return this.spots.filter( spot => !currentSpots.includes(spot.id) );
  }

  _createMarkerFromBench(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      spotId: spot.id
    });

    // marker.addListener('click', () => this.handleClick(spot));
    this.markers.push(marker);
  }
}
