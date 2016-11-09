import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { createSpot,
         updateSpot,
         deleteSpot
       } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  loggedIn: state.session.currentUser ? true : null,
  spot: ownProps.spotFormInfo.editSpotTarget,
  errors: state.spots.errors || []
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType;
  const processForm = spot => {
    if (ownProps.spotFormInfo.isNewSpot === true) {
      formType = 'Create a Vacation';
      return createSpot(spot);
    } else {
      formType = 'Edit your Vacation';
      return updateSpot(spot);
    }
  };

  return {
    processForm: spot => dispatch(processForm(spot)),
    createSpot: spot => dispatch(createSpot(spot)),
    updateSpot: spot => dispatch(updateSpot(spot)),
    deleteSpot: spotId => dispatch(deleteSpot(spotId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);
