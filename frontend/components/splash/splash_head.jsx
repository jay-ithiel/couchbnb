import React from 'react';
import { connect } from 'react-redux';

// Components
import NavSearch from '../navbar/nav_search';

// Actions
import { requestLocation } from '../../actions/filter_actions';

const SplashHead = ({ guestLogin, requestLocation }) => {
  return (
    <div className="main-pic">
      <div className='flex'>
        <h2 className="banner">
          Book unique homes and experience a city like a local
        </h2>
        <NavSearch requestLocation={requestLocation}/>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  requestLocation: location => dispatch(requestLocation(location))
});

export default connect(null, mapDispatchToProps)(SplashHead);
