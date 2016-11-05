import { CREATE_SPOT,
         UPDATE_SPOT,
         DELETE_SPOT,
         REQUEST_SPOT,
         REQUEST_SPOTS,
         removeSpot,
         receiveSpot,
         receiveSpots,
         receiveErrors
       } from '../actions/spot_actions';

import { createSpot,
         updateSpot,
         deleteSpot,
         fetchSpot,
         fetchAllSpots
       } from '../util/spot_api_util';

const SpotsMiddleware = store => next => action => {
  const spotSuccess = data => {
    store.dispatch(receiveSpot(data));
  };

  const spotsSuccess = data => {
    store.dispatch(receiveSpots(data));
  };

  const deleteSpotSuccess = data => {
    store.dispatch(removeSpot(data));
  };

  const errorCallback = errors => {
    store.dispatch(receiveErrors(errors.responseJSON));
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
      fetchSpot(action.spot, spotSuccess, errorCallback);
      return next(action);

    case REQUEST_SPOTS:
      fetchAllSpots(spotsSuccess, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default SpotsMiddleware;
