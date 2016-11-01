import { LOGIN,
         LOGOUT,
         SIGNUP,
         receiveCurrentUser,
         receiveErrors
       } from '../actions/session_actions';

import { login,
         logout,
         signup
       } from '../util/session_api_util';

const SessionMiddleware = store => next => action => {
  const loginSuccessCallback = (user) => (
    store.dispatch(receiveCurrentUser(user))
  );
  const errorCallback = (errors) => (
    store.dispatch(receiveErrors(errors.responseJSON))
  );

  switch(action.type) {
    case LOGIN:
      login(action.user, loginSuccessCallback, errorCallback);
      return next(action);

    case LOGOUT:
      logout(() => next(action));
      break;

    case SIGNUP:
      signup(action.user, loginSuccessCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
