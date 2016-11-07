export const createBooking = (booking, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/bookings',
    data: { booking },
    success,
    error
  });
};

export const deleteBooking = (id, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/bookings/${id}`,
    success,
    error
  });
};

export const fetchBooking = (id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/bookings/${id}`,
    success,
    error
  });
};

export const fetchAllBookings = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/bookings',
    success,
    error
  });
};
