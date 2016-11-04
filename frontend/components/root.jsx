import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';


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

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
