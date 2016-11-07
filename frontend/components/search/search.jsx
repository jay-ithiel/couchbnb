import React from 'react';
import { withRouter } from 'react-router';
import SearchResultItem from './search_result_item';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.spots = this.spots.bind(this);
    this.mapContainer = this.mapContainer.bind(this);
    this.filters = this.filters.bind(this);
  }

  componentDidMount() {
    this.props.requestSpots();
  }

  handleSpotView(spotId) {
    return () => this.props.router.push(`spots/${spotId}`);
  }

  spots() {
    let spotIds = Object.keys(this.props.spots);

    if (spotIds.length === 0) { return; }
    let allSpots = spotIds.map(spotId => {
      let spot = this.props.spots[spotId];
      return (
        <div key={spot.id}
             className="spot-item"
             onClick={ this.handleSpotView(spot.id) }>
          <SearchResultItem spot={spot}/>
        </div>
      );
    });

    return (
      <div className='filtered-spots'>
        {allSpots}
      </div>
    );
  }

  mapContainer() {
    return (
      <div className="map-container">

      </div>
    );
  }

  filters() {
    return (
      <div className="filters">
        <div className="filters-row">
          <h2>Dates</h2>
        </div>

        <div className="filters-row">
          <h2>Room Type</h2>
        </div>

        <div className="filters-row-bottom">
          <h2>Price Range</h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='search-container'>
        <div className='results'>
          {this.filters()}
          {this.spots()}
        </div>
        {this.mapContainer()}
      </div>
    );
  }
}

export default Search;
