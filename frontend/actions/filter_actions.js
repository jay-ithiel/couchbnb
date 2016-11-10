export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const UPDATE_FILTER = "UPDATE_FILTER";
export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
