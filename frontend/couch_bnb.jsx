import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

// dev test imports
import { login,
         logout,
         signup
       } from './actions/session_actions';

import { requestSpots } from './actions/spot_actions';

document.addEventListener("DOMContentLoaded", () => {
  const mainRoot = document.getElementById("root");
  Modal.setAppElement(document.body);

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.requestSpots = requestSpots;

  ReactDOM.render(<Root store={store}/>, mainRoot);
});
