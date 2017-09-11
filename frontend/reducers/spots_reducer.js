import merge from 'lodash/merge';
import { RECEIVE_SPOT,
         RECEIVE_SPOTS,
         RECEIVE_SPOT_ERRORS
       } from '../actions/spot_actions';

const _defaultState = {
  index: {},
  errors: []
};

const SpotsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_SPOTS:
      newState.index = action.spots;
      return newState;

    case RECEIVE_SPOT:
      newState.index[action.spot.id] = action.spot;
      newState.errors = [];
      return newState;

    case RECEIVE_SPOT_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default SpotsReducer;
