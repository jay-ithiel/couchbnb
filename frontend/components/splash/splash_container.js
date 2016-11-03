import { logout,
         login,
         signup
       } from '../../actions/session_actions';

import { connect } from 'react-redux';
import Splash from './splash.jsx';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  signup: () => dispatch(signup()),
  login: () => dispatch(login()),
  guestLogin: () => dispatch(login({ user: { email: "guest@gmail.com", password: "password" }}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
