export const CREATE_SPOT = "CREATE_SPOT";
export const createSpot = spot => ({
  type: CREATE_SPOT,
  spot
});

export const UPDATE_SPOT = "UPDATE_SPOT";
export const updateSpot = spot => ({
  type: UPDATE_SPOT,
  spot
});

export const DELETE_SPOT = "DELETE_SPOT";
export const deleteSpot = id => ({
  type: DELETE_SPOT,
  id
});

export const REMOVE_SPOT = "REMOVE_SPOT";
export const removeSpot = id => ({
  type: REMOVE_SPOT,
  id
});

export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const receiveSpot = spot => ({
  type: RECEIVE_SPOT,
  spot
});

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const receiveSpots = spots => ({
  type: RECEIVE_SPOTS,
  spots
});

export const REQUEST_SPOT = "REQUEST_SPOT";
export const requestSpot = spotId => ({
  type: REQUEST_SPOT,
  spotId
});

export const REQUEST_SPOTS = "REQUEST_SPOTS";
export const requestSpots = () => ({
  type: REQUEST_SPOTS
});

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
