import { connect } from 'react-redux';
import Host from './host';
import { deleteSpot } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  currentUserSpots: state.session.currentUser.spots
});

const mapDispatchToProps = dispatch => ({
  deleteSpot: spotId => dispatch(deleteSpot(spotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Host);
