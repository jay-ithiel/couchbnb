export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];

    this._spotsToAdd = this._spotsToAdd.bind(this);
    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(spots) {
    this.spots = Object.keys(spots).map(key => spots[key]);
    this._spotsToAdd().forEach(this._createMarkerFromSpot);
    this._markersToRemove().forEach(this._removeMarker);
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
    // marker.setMap(this.map);
  }

  _markersToRemove() {
    const spotIds = this.spots.map( spot => spot.id );
    return this.markers.filter( marker => !spotIds.includes(marker.spotId) );
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf(marker);
    // this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
