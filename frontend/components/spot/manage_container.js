import { connect } from 'react-redux';
import ManageSpot from './manage_spot';
import {
  requestSpot
} from '../../actions/spot_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  currentSpot: state.spots.index
});

const mapDispatchToProps = dispatch => ({
  requestSpot: spotId => dispatch(requestSpot(spotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageSpot);
