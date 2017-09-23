export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const UPDATE_MIN_PRICE = "UPDATE_MIN_PRICE";
export const updateMinPrice = minPrice => ({
  type: UPDATE_MIN_PRICE,
  minPrice
});

export const UPDATE_MAX_PRICE = "UPDATE_MAX_PRICE";
export const updateMaxPrice = maxPrice => ({
  type: UPDATE_MAX_PRICE,
  maxPrice
});

export const UPDATE_PRICE = "UPDATE_PRICE";
export const updatePrice = (minPrice, maxPrice) => ({
  type: UPDATE_PRICE,
  minPrice,
  maxPrice,
});

export const UPDATE_ROOM_TYPE = "UPDATE_ROOM_TYPE";
export const updateRoomType = roomType => ({
  type: UPDATE_ROOM_TYPE,
  roomType
});

export const UPDATE_CHECK_IN = "UPDATE_CHECK_IN";
export const updateCheckIn = checkIn => ({
  type: UPDATE_CHECK_IN,
  checkIn
});

export const UPDATE_CHECK_OUT = "UPDATE_CHECK_OUT";
export const updateCheckOut = checkOut => ({
  type: UPDATE_CHECK_OUT,
  checkOut
});

export const REQUEST_LOCATION = "REQUEST_LOCATION";
export const requestLocation = location => ({
  type: REQUEST_LOCATION,
  location
});

export const RECEIVE_LOCATION = "RECEIVE_LOCATION";
export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
});

export const UPDATE_NUM_GUESTS = "UPDATE_NUM_GUESTS";
export const updateNumGuests = numGuests => ({
  type: UPDATE_NUM_GUESTS,
  numGuests
});

export const UPDATE_FILTER = "UPDATE_FILTER";
export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
