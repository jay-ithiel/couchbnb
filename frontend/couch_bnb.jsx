import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const mainRoot = document.getElementById("root");
  // ReactDOM.render(<h2>This is react Root</h2>, mainRoot);
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, mainRoot);
});
