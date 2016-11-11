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

import { UPDATE_BOUNDS,
         UPDATE_FILTER,
         UPDATE_MIN_PRICE,
         UPDATE_MAX_PRICE,
         UPDATE_ROOM_TYPE,
         UPDATE_CHECK_IN,
         UPDATE_CHECK_OUT,
         UPDATE_LOCATION,
         UPDATE_NUM_GUESTS
       } from '../actions/filter_actions';

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

    case UPDATE_BOUNDS:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_MIN_PRICE:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_MAX_PRICE:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_ROOM_TYPE:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_CHECK_IN:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_CHECK_OUT:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_NUM_GUESTS:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_FILTER:
      next(action);
      dispatch(requestSpots());
      break;

    default:
      return next(action);
  }
};

export default SpotsMiddleware;
