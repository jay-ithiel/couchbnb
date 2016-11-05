import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { createSpot,
         updateSpot,
         deleteSpot
       } from '../../actions/spot_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  loggedIn: state.session.currentUser ? true : null
});

const mapDispatchToProps = dispatch => ({
  createSpot: spot => dispatch(createSpot(spot)),
  updateSpot: spot => dispatch(updateSpot(spot)),
  deleteSpot: spotId => dispatch(deleteSpot(spotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);
