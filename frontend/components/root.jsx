import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import SpotContainer from './spot/spot_container';
import HostContainer from './host/host_container';
import SearchContainer from './search/search_container';

const Root = ({ store }) => {

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/splash');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App} >

          <IndexRoute
            component={HomeContainer}
            onEnter={_redirectUnlessLoggedIn}>
          </IndexRoute>

          <Route
            path='/splash'
            component={SplashContainer}
            onEnter={_redirectIfLoggedIn} >
          </Route>

          <Route
            path='/spots/:spot_id'
            component={SpotContainer} >
          </Route>

          <Route
            path='/host'
            component={HostContainer}
            onEnter={_redirectUnlessLoggedIn}>
          </Route>

          <Route
            path='/search'
            component={SearchContainer}>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
