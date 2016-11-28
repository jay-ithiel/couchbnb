export const CREATE_BOOKING = "CREATE_BOOKING";
export const createBooking = booking => ({
  type: CREATE_BOOKING,
  booking
});

export const DELETE_BOOKING = "DELETE_BOOKING";
export const deleteBooking = id => ({
  type: DELETE_BOOKING,
  id
});

export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const removeBooking = id => ({
  type: REMOVE_BOOKING,
  id
});

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const REQUEST_BOOKING = "REQUEST_BOOKING";
export const requestBooking = id => ({
  type: REQUEST_BOOKING,
  id
});

export const REQUEST_BOOKINGS = "REQUEST_BOOKINGS";
export const requestBookings = () => ({
  type: REQUEST_BOOKINGS
});

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const APPROVE_BOOKING = "APPROVE_BOOKING";
export const approveBooking = (booking) => ({
  type: APPROVE_BOOKING,
  booking
});

export const DENY_BOOKING = "DENY_BOOKING";
export const denyBooking = (booking) => ({
  type: DENY_BOOKING,
  booking
});
