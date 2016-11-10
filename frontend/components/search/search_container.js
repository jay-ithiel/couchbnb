import { connect } from 'react-redux';
import Search from './search';
import { requestSpots } from '../../actions/spot_actions';

import { updateBounds,
         updateFilter
       } from '../../actions/filter_actions';

import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  spots: state.spots.index,
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice
});

const mapDispatchToProps = dispatch => ({
  requestSpots: () => dispatch(requestSpots()),
  updateFilter: (filter) => dispatch(updateFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
