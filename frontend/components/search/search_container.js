import { connect } from 'react-redux';
import Search from './search';
import { requestSpots } from '../../actions/spot_actions';

import { updateBounds,
         updateFilter,
         updateMinPrice,
         updateMaxPrice
       } from '../../actions/filter_actions';

import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  spots: state.spots.index,
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice
});

const mapDispatchToProps = dispatch => ({
  requestSpots: () => dispatch(requestSpots()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  updateMinPrice: minPrice => dispatch(updateMinPrice(minPrice)),
  updateMaxPrice: maxPrice => dispatch(updateMaxPrice(maxPrice))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
