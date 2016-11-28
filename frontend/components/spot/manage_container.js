import { connect } from 'react-redux';
import ManageSpot from './manage_spot';
import {
  requestSpot
} from '../../actions/spot_actions';

import {
  approveBooking,
  denyBooking
} from '../../actions/booking_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  currentSpot: state.spots.index
});

const mapDispatchToProps = dispatch => ({
  requestSpot: spotId => dispatch(requestSpot(spotId)),
  approveBooking: booking => dispatch(approveBooking(booking)),
  denyBooking: booking => dispatch(denyBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSpot);
