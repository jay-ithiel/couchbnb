import React from 'react';
import { withRouter } from 'react-router';

// Components
import Layout from '../layout/layout';
import FilterForm from './filter_form';
import SearchResultItem from './search_result_item';
import SpotMap from './spot_map';

export default class Search extends React.Component {
  handleSpotView(spotId) {
    return () => this.props.router.push(`spots/${spotId}`);
  }

  spots() {
    let spotIds = Object.keys(this.props.spots);
    return spotIds.length === 0 ? [] : spotIds.map(spotId => {
      let spot = this.props.spots[spotId];
      return (
        <div  key={spot.id} className="spot-item" onClick={this.handleSpotView(spot.id)}>
          <SearchResultItem spot={spot}/>
        </div>
      );
    });
  }

  render() {
    return (
      <Layout isSearchPage={true}>
        <div className='search-container'>
          <div className='results'>
            <FilterForm
              minPrice={this.props.minPrice}
              maxPrice={this.props.maxPrice}
              updateFilter={this.props.updateFilter}
              updatePrice={this.props.updatePrice}
              updateRoomType={this.props.updateRoomType}
              updateCheckIn={this.props.updateCheckIn}
              updateCheckOut={this.props.updateCheckOut}
              updateLocation={this.props.updateLocation}
              updateNumGuests={this.props.updateNumGuests}
            />
            <div className='filtered-spots'>
              {this.spots.bind(this)()}
            </div>
          </div>

          <SpotMap
            spots={this.props.spots}
            location={this.props.location}
            requestSpots={this.props.requestSpots}
            updateBounds={this.props.updateBounds}
            updateFilter={this.props.updateFilter}
          />
        </div>
      </Layout>
    );
  }
}
