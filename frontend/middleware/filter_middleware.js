import {
  CREATE_SPOT,
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

import {
  UPDATE_BOUNDS,
  UPDATE_FILTER,
  UPDATE_PRICE,
  UPDATE_ROOM_TYPE,
  UPDATE_CHECK_IN,
  UPDATE_CHECK_OUT,
  UPDATE_LOCATION,
  UPDATE_NUM_GUESTS,
  REQUEST_LOCATION,
  requestLocation,
  receiveLocation,
  updateBounds,
} from '../actions/filter_actions';

import { fetchLocation } from '../util/filter_api_util';

const FilterMiddleware = ({ getState, dispatch }) => next => action => {
  const locationSuccess = data => {
    let bounds = data.results[0].geometry.bounds;
    let location = data.results[0].geometry.location;
    dispatch(updateBounds(bounds));
    dispatch(receiveLocation(location));
  };

  switch(action.type) {
    case REQUEST_LOCATION:
      fetchLocation(action.location, locationSuccess);
      return next(action);

    case UPDATE_BOUNDS:
      next(action);
      dispatch(requestSpots());
      break;

    case UPDATE_PRICE:
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

export default FilterMiddleware;
