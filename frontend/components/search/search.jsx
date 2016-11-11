import React from 'react';
import { withRouter } from 'react-router';
import SearchResultItem from './search_result_item';
import SpotMap from './spot_map';
import FilterForm from './filter_form';

const DatePicker = require('react-datepicker');
const moment = require('moment');

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.spots = this.spots.bind(this);
    this.filters = this.filters.bind(this);
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

  filters() {
    return (
      <FilterForm
        minPrice={this.props.minPrice}
        maxPrice={this.props.maxPrice}
        updateFilter={this.props.updateFilter}
        updateMaxPrice={this.props.updateMaxPrice}
        updateMinPrice={this.props.updateMinPrice}
        updateMaxPrice={this.props.updateMaxPrice}
        updateRoomType={this.props.updateRoomType}
        updateCheckIn={this.props.updateCheckIn}
        updateCheckOut={this.props.updateCheckOut}
        updateLocation={this.props.updateLocation}
        updateNumGuests={this.props.updateNumGuests}/>
    );
  }

  render() {
    return (
      <div className='search-container'>
        <div className='results'>
          {this.filters()}
          {this.spots()}
        </div>
        <SpotMap
          spots={this.props.spots}
          location={this.props.location}
          requestSpots={this.props.requestSpots}
          updateBounds={this.props.updateBounds}
          updateFilter={this.props.updateFilter}/>
      </div>
    );
  }
}

export default Search;
