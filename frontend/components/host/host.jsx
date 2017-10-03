import React from 'react';
import { Link, withRouter } from 'react-router';

// Components
import Layout from '../layout/layout';
import SpotFormContainer from '../spot/spot_form_container';
import Listing from './listing';

class Host extends React.Component {
  constructor(props) {
    super(props);

    this.listings = this.listings.bind(this);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);
    this.toggleSpotForm = this.toggleSpotForm.bind(this);

    this.state = {
      isNewSpot: true,
      editSpotTarget: null,
      hostedSpots: props.currentUserSpots,
      isFormShowing: false
    };
  }

  _redirectUnlessLoggedIn() {
    if (!this.props.loggedIn) this.props.router.push('/');
  }

  componentDidUpdate() {
    this._redirectUnlessLoggedIn();
  }

  toggleSpotForm() {
    if (this.state.isFormShowing) {
      $(".spot-form-container").addClass("display-none");
      this.setState({ isFormShowing: false });
    } else {
      $(".spot-form-container").removeClass("display-none");
      this.setState({ isFormShowing: true });
    }
  }

  listings() {
    if (this.props.currentUserSpots == null) return;
    return this.props.currentUserSpots.map(spot => (
      <Listing spot={spot}/>
    ));
  }

  render() {
    return (
      <Layout>
        <button id="add-listing" onClick={this.toggleSpotForm}>
          Add A Listing
        </button>

        <SpotFormContainer spotFormInfo={this.state}/>

        <div className='host-body'>
          <div className='listings'>
            <h2 className='listings-header'>Your hosted vacations</h2>
            <ul className="listings-ul">
              { this.listings() }
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Host);
