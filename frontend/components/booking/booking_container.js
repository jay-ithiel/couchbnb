import { connect } from 'react-redux';
import Booking from './booking';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  currentUserBookings: state.session.currentUser.bookings
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
