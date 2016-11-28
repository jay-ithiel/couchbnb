import { CREATE_BOOKING,
         DELETE_BOOKING,
         REQUEST_BOOKING,
         REQUEST_BOOKINGS,
         APPROVE_BOOKING,
         DENY_BOOKING,
         removeBooking,
         receiveBooking,
         receiveBookings,
         receiveErrors
       } from '../actions/booking_actions';

import { createBooking,
         updateBooking,
         deleteBooking,
         fetchBooking,
         fetchAllBookings,
         approveBooking,
         denyBooking
       } from '../util/booking_api_util';

const BookingsMiddleware = store => next => action => {
  const bookingSuccess = data => {
    store.dispatch(receiveBooking(data));
  };

  const bookingsSuccess = data => {
    store.dispatch(receiveBookings(data));
  };

  const deleteBookingSuccess = data => {
    store.dispatch(removeBooking(data));
  };

  const errorCallback = errors => {
    store.dispatch(receiveErrors(errors.responseJSON));
  };

  switch(action.type) {
    case CREATE_BOOKING:
      createBooking(action.booking, bookingSuccess, errorCallback);
      return next(action);

    case DELETE_BOOKING:
      deleteBooking(action.id, deleteBookingSuccess, errorCallback);
      return next(action);

    case REQUEST_BOOKING:
      fetchBooking(action.id, bookingSuccess, errorCallback);
      return next(action);

    case REQUEST_BOOKINGS:
      fetchAllBookings(bookingsSuccess, errorCallback);
      return next(action);

    case APPROVE_BOOKING:
      approveBooking(action.booking, bookingSuccess, errorCallback);
      return next(action);

    case DENY_BOOKING:
      denyBooking(action.booking, bookingSuccess, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default BookingsMiddleware;
