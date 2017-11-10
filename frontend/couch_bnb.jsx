import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
var http = require("http");

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

  setInterval(function() {
    http.get("http://couchbnb.herokuapp.com");
  }, 300000); // every 5 minutes (300000)

  ReactDOM.render(<Root store={store}/>, mainRoot);

  window.store = store;
});
