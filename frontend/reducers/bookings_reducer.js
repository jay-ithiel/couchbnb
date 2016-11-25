import merge from 'lodash/merge';
import { RECEIVE_BOOKING,
         RECEIVE_BOOKINGS,
         RECEIVE_ERRORS
       } from '../actions/booking_actions';

const _defaultState = {
  index: {},
  errors: []
};

const BookingsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_BOOKINGS:
      newState.index = action.bookings;
      return newState;

    case RECEIVE_BOOKING:
      newState.index[action.booking.id] = action.booking;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }

};

export default BookingsReducer;
