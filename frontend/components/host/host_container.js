import { connect } from 'react-redux';
import Host from './host';
import {
  deleteSpot,
  requestSpot
} from '../../actions/spot_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  realCurrentUserSpots: state.spots.index,
  currentUserSpots: state.session.currentUser.spots
});

const mapDispatchToProps = dispatch => ({
  deleteSpot: spotId => dispatch(deleteSpot(spotId)),
  requestSpot: spotId => dispatch(requestSpot(spotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Host);
