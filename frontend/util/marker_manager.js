export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];

    this._spotsToAdd = this._spotsToAdd.bind(this);
    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
  }

  updateMarkers(spots) {
    this.spots = Object.keys(spots).map(key => spots[key]);
    this._spotsToAdd().forEach(this._createMarkerFromSpot);
  }

  _spotsToAdd() {
    if (this.spots === undefined) { return []; }
    const currentSpots = this.markers.map( marker => marker.spotId );
    return this.spots.filter( spot => !currentSpots.includes(spot.id) );
  }

  _createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      spotId: spot.id
    });

    // marker.addListener('click', () => this.handleClick(spot));
    this.markers.push(marker);
    marker.setMap(this.map);
  }
}
