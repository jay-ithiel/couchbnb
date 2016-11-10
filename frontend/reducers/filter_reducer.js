import merge from 'lodash/';
import { UPDATE_BOUNDS,
         UPDATE_FILTER
       } from '../actions/filter_actions';

const _defaultState = {
  bounds: {
    "northEast": {"lat": "37.80971", "lng": "-122.39208"},
    "southWest": {"lat": "37.74187", "lng": "-122.47791"}
  },
  minPrice: 10,
  maxPrice: 1000
};

const FilterReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case UPDATE_FILTER:
      newState[action.filter] = action.value;
      return newState;

    default:
      return oldState;
  }
};

export default FilterReducer;
