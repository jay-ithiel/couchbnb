import merge from 'lodash/merge';
import { RECEIVE_SPOT,
         RECEIVE_SPOTS,
         RECEIVE_ERRORS
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
      newState = merge({}, oldState);
      newState.index[action.spot.id] = action.spot;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }

};

export default SpotsReducer;
