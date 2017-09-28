import { connect } from 'react-redux';
import Search from './search';
import { requestSpots } from '../../actions/spot_actions';
import {
  updateBounds,
  updateFilter,
  updatePrice,
  updateRoomType,
  updateCheckIn,
  updateCheckOut,
  updateLocation,
  updateNumGuests,
} from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    spots: state.spots.index,
    minPrice: state.filters.minPrice,
    maxPrice: state.filters.maxPrice,
    location: state.filters.location
  };
};

const mapDispatchToProps = dispatch => ({
  requestSpots: () => dispatch(requestSpots()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  updatePrice: (minPrice, maxPrice) => dispatch(updatePrice(minPrice, maxPrice)),
  updateRoomType: roomType => dispatch(updateRoomType(roomType)),
  updateCheckIn: checkIn => dispatch(updateCheckIn(checkIn)),
  updateCheckOut: checkOut => dispatch(updateCheckOut(checkOut)),
  updateLocation: location => dispatch(updateLocation(location)),
  updateNumGuests: numGuests => dispatch(updateNumGuests(numGuests))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
