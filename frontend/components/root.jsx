import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import App from './app';
import Splash from './splash/splash';
import Spot from './spot/spot';
import ManageSpotContainer from './spot/manage_container';
import HostContainer from './host/host_container';
import SearchContainer from './search/search_container';
import BookingContainer from './booking/booking_container';

// Actions
import { requestSpots, requestSpot } from '../actions/spot_actions';
import { requestBooking } from '../actions/booking_actions';

const Root = ({ store }) => {
  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) replace('/splash');
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) replace('/');
  };

  const _getSpotsForSearch = () => {
    store.dispatch(requestSpots());
  };

  const _getCurrentUserSpots = () => {
    store.getState().session.currentUser.spots.forEach(spot => {
      store.dispatch(requestSpot(spot.id));
    });
  };

  const _hostOnEnter = () => {
    _getCurrentUserSpots();
    _redirectUnlessLoggedIn();
  };

  const _getCurrentUserBookings = () => {
    store.getState().session.currentUser.bookings.forEach(booking => {
      store.dispatch(requestBooking(booking.id));
    });
  };

  const _bookingOnEnter = () => {
    _getCurrentUserBookings();
    _redirectUnlessLoggedIn();
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>

          <IndexRoute component={Splash}></IndexRoute>

          <Route
            path='/spots/:spot_id'
            component={Spot}>
          </Route>

          <Route
            path='/host'
            component={HostContainer}
            onEnter={_redirectUnlessLoggedIn}>
          </Route>

          <Route
            path='/bookings'
            component={BookingContainer}
            onEnter={_bookingOnEnter}>
          </Route>

          <Route
            path='/search'
            component={SearchContainer}
            onEnter={_getSpotsForSearch}>
          </Route>

          <Route
            path='/manage/:spot_id'
            component={ManageSpotContainer}
            onEnter={_redirectUnlessLoggedIn}>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
