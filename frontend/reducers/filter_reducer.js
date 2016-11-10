import merge from 'lodash/merge';
import { UPDATE_BOUNDS,
         UPDATE_FILTER,
         UPDATE_MIN_PRICE,
         UPDATE_MAX_PRICE
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

    case UPDATE_BOUNDS:
      newState.bounds = action.bounds;
      return newState;

    case UPDATE_MIN_PRICE:
      newState.minPrice = action.minPrice;
      return newState;

    case UPDATE_MAX_PRICE:
      newState.maxPrice = action.maxPrice;
      return newState;

    default:
      return oldState;
  }
};

export default FilterReducer;
