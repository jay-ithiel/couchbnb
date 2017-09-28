import merge from 'lodash/merge';
import {
  UPDATE_BOUNDS,
  UPDATE_FILTER,
  UPDATE_PRICE,
  UPDATE_ROOM_TYPE,
  UPDATE_CHECK_IN,
  UPDATE_CHECK_OUT,
  RECEIVE_LOCATION,
  UPDATE_NUM_GUESTS,
} from '../actions/filter_actions';

const _defaultState = {
  bounds: {
    "northeast": {"lat": "37.80971", "lng": "-122.39208"},
    "southwest": {"lat": "37.74187", "lng": "-122.47791"}
  },
  location: {},
  minPrice: 10,
  maxPrice: 1000,
  roomType: null,
  checkIn: null,
  checkOut: null,
  numGuests: 1
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

    case UPDATE_PRICE:
      newState.minPrice = action.minPrice;
      newState.maxPrice = action.maxPrice;
      return newState;

    case UPDATE_ROOM_TYPE:
      newState.roomType = action.roomType;
      return newState;

    case UPDATE_CHECK_IN:
      newState.checkIn = action.checkIn;
      return newState;

    case UPDATE_CHECK_OUT:
      newState.checkOut = action.checkOut;
      return newState;

    case RECEIVE_LOCATION:
      newState.location = action.location;
      return newState;

    case UPDATE_NUM_GUESTS:
      newState.numGuests = action.numGuests;
      return newState;

    default:
      return oldState;
  }
};

export default FilterReducer;
