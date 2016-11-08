import { connect } from 'react-redux';
import Search from './search';
import { requestSpots } from '../../actions/spot_actions';

const mapStateToProps = state => {
  return {
    spots: state.spots.index
  };
};

const mapDispatchToProps = dispatch => ({
  requestSpots: () => dispatch(requestSpots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
