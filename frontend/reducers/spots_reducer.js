import merge from 'lodash/merge';
import { RECEIVE_SPOT,
         RECEIVE_SPOTS
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
      return newState;

    default:
      return oldState;
  }

};

export default SpotsReducer;
