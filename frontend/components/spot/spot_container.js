import { connect } from 'react-redux';
import Spot from './spot';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  spots: state.spots
});

const mapDispatchToProps = state => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spot);
