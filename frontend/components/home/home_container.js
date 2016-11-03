import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
