export const LOGIN = "LOGIN";
export const login = user => ({
  type: LOGIN,
  user
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT
});

export const SIGNUP = "SIGNUP";
export const signup = user => ({
  type: SIGNUP,
  user
});

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// receiveErrors takes an array of errors
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
