import { connect } from 'react-redux';
import Search from './search';
import { requestSpots } from '../../actions/spot_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  spots: state.spots.index
});

const mapDispatchToProps = dispatch => ({
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
