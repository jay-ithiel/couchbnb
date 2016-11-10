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
        updateFilter={this.props.updateFilter} />
    );
  }

  // filters() {
  //   return (
  //     <div className="filters-container">
  //
  //       <div className="filters-row">
  //         <h2>Dates</h2>
  //
  //         <div className="filters">
  //           <div className="filters-row-date">
  //             <label>Check In</label>
  //             <DatePicker />
  //           </div>
  //
  //           <div className="filters-row-date">
  //             <label>Check Out</label>
  //             <DatePicker />
  //           </div>
  //
  //           <div className="filters-row-guest">
  //             <select className="">
  //               <option value="" disabled selected>Max Guests</option>
  //               <option value="1">1</option>
  //               <option value='2'>2</option>
  //               <option value='3'>3</option>
  //               <option value='4'>4</option>
  //               <option value='5'>5</option>
  //               <option value='6'>6</option>
  //               <option value='7'>7</option>
  //               <option value='8'>8</option>
  //               <option value='9'>9</option>
  //               <option value='10+'>10+</option>
  //             </select>
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="filters-row">
  //         <h2>Room Type</h2>
  //         <div className="filters">
  //           <div className="filters-row-roomtype">
  //             <input type="radio"
  //                    name="room_type" />Entire House/Apt
  //
  //             <input type="radio"
  //                    name="room_type" />Private Room
  //
  //             <input type="radio"
  //                    name="room_type" />Shared Room
  //           </div>
  //         </div>
  //       </div>
  //
  //       <div className="filters-row-bottom">
  //         <h2>Price Range</h2>
  //         <div className="filters">
  //           <input type="range" name="points" min="0" max="10" />
  //         </div>
  //       </div>
  //
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className='search-container'>
        <div className='results'>
          {this.filters()}
          {this.spots()}
        </div>
        <SpotMap
          spots={this.props.spots}
          requestSpots={this.props.requestSpots}
          updateFilter={this.props.updateFilter}/>
      </div>
    );
  }
}

export default Search;


// if (Object.keys(this.props.spots).length === 0) {
//   return (
//     <div className='search-container'>
//       <div className='results'>
//         {this.filters()}
//         {this.spots()}
//       </div>
//     </div>
//   );
// } else {
//   return (
//     <div className='search-container'>
//       <div className='results'>
//         {this.filters()}
//         {this.spots()}
//       </div>
//       <SpotMap
//         spots={this.props.spots}
//         updateBounds={this.props.updateBounds}/>
//     </div>
//   );
// }
