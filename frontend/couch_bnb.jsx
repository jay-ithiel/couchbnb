import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

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

  ReactDOM.render(<Root store={store}/>, mainRoot);
});
