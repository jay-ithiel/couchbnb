import { connect } from 'react-redux';
import Booking from './booking';
import { requestBooking } from '../../actions/booking_actions';


const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  realCurrentUserBookings: state.bookings.index,
  currentUserBookings: state.session.currentUser.bookings
});

const mapDispatchToProps = dispatch => ({
  requestBooking: id => dispatch(requestBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
