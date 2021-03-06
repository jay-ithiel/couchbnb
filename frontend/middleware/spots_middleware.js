import { CREATE_SPOT,
         UPDATE_SPOT,
         DELETE_SPOT,
         REQUEST_SPOT,
         REQUEST_SPOTS,
         requestSpots,
         removeSpot,
         receiveSpot,
         receiveSpots,
         receiveSpotErrors
       } from '../actions/spot_actions';

import { createSpot,
         updateSpot,
         deleteSpot,
         fetchSpot,
         fetchAllSpots
       } from '../util/spot_api_util';

const SpotsMiddleware = ({ getState, dispatch }) => next => action => {
  const spotSuccess = data => {
    // re-render the host component here.
    dispatch(receiveSpot(data));
  };

  const spotsSuccess = data => {
    dispatch(receiveSpots(data));
  };

  const deleteSpotSuccess = data => {
    dispatch(removeSpot(data));
  };

  const errorCallback = errors => {
    dispatch(receiveSpotErrors(errors.responseJSON));
  };

  switch(action.type) {
    case CREATE_SPOT:
      createSpot(action.spot, spotSuccess, errorCallback);
      return next(action);

    case UPDATE_SPOT:
      updateSpot(action.spot, spotSuccess, errorCallback);
      return next(action);

    case DELETE_SPOT:
      deleteSpot(action.id, deleteSpotSuccess, errorCallback);
      return next(action);

    case REQUEST_SPOT:
      fetchSpot(action.spotId, spotSuccess, errorCallback);
      return next(action);

    case REQUEST_SPOTS:
      const filters = getState().filters;
      fetchAllSpots(filters, spotsSuccess, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default SpotsMiddleware;
