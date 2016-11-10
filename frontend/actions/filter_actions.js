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

export const UPDATE_FILTER = "UPDATE_FILTER";
export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
