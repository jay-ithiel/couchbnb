import { connect } from 'react-redux';
import SpotForm from './spot_form';
import { createSpot,
         updateSpot,
         deleteSpot
       } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  if (ownProps.spotFormInfo.isNewSpot === true) {
    formType = 'Create a Vacation';
  } else {
    formType = 'Update Your Vacation';
  }

  return {
    currentUser: state.session.currentUser,
    loggedIn: state.session.currentUser ? true : false,
    spot: ownProps.spotFormInfo.editSpotTarget,
    errors: state.spots.errors || [],
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = spot => {
    if (ownProps.spotFormInfo.isNewSpot === true) {
      return createSpot(spot);
    } else {
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
