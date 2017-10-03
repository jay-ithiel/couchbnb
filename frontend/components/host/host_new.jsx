import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Components
import Layout from '../layout/layout';
import SpotFormContainer from '../spot/spot_form_container';
import Listing from './listing';

// Actions
import {
  requestSpots
} from '../../actions/spot_actions';

class Host extends React.Component {
  constructor(props) {
    super(props);

    this._isCurrentUserAHost = this._isCurrentUserAHost.bind(this);
  }
  // if currentUser has hostedSpots, render the hostedSpots and a button to add a new spot
  // else render SpotForm

  _isCurrentUserAHost() {
    return this.props.currentUser.spots.length > 0 ? true : false;
  }

  listings() {
    return this.props.currentUser.spots.map(spot => (
      <li key={spot.id}>
        <Listing listing={spot}/>
      </li>
    ));
  }

  render() {
    return !this._isCurrentUserAHost() ? <SpotFormContainer/> : (
      <Layout>
        <div className='host-body'>
          <section className='listings'>
            <h2 className='listings-header'>Your listings</h2>
            <ul className='listings-ul'>{ this.listings() }</ul>
          </section>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(withRouter(Host));
