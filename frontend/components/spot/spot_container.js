import { connect } from 'react-redux';
import Spot from './spot';
import { requestSpot } from '../../actions/spot_actions';
import { createBooking } from '../../actions/booking_actions';


const mapStateToProps = (state) => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  spots: state.spots.index
});

const mapDispatchToProps = dispatch => ({
  requestSpot: spotId => dispatch(requestSpot(spotId)),
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spot);
