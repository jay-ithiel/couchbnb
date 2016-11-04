import merge from 'lodash/merge';
import { CREATE_SPOT,
         UPDATE_SPOT,
         DELETE_SPOT
       } from '../actions/spot_actions';

const _defaultState = {
  spot: null,
  errors: []
};

const SpotReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case CREATE_SPOT:
      return newState;

    case UPDATE_SPOT:
      return newState;

    case DELETE_SPOT:
      return newState;

    default:
      return oldState;
  }

};

export default SpotReducer;
