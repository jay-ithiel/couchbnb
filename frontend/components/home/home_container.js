import { connect } from 'react-redux';
import Home from './home';
import { requestLocation } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestLocation: location => dispatch(requestLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
