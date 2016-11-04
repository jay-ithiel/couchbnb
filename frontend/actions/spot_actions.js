export const CREATE_SPOT = "CREATE_SPOT";
export const createSpot = spot => ({
  type: CREATE_SPOT,
  spot
});

export const DELETE_SPOT = "DELETE_SPOT";
export const deleteSpot = id => ({
  type: DELETE_SPOT,
  id
});

export const UPDATE_SPOT = "UPDATE_SPOT";
export const updateSpot = spot => ({
  type: UPDATE_SPOT,
  spot
});

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
