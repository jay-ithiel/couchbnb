import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { requestLocation } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  logout: () => dispatch(logout()),
  requestLocation: location => dispatch(requestLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
