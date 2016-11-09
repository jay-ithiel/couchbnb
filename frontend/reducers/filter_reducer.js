import merge from 'lodash/';
import { UPDATE_BOUNDS } from '../actions/filter_actions';

const _defaultState = {
  bounds: {}
};

const FilterReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case UPDATE_BOUNDS:
      newState.bounds = action.bounds;
      return newState;

    default:
      return oldState;
  }
};

export default FilterReducer;
