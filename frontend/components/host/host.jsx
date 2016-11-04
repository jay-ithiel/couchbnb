import React from 'react';
import { withRouter } from 'react-router';
import Footer from '../footer/footer';
import SpotFormContainer from '../spot/spot_form_container';

class Host extends React.Component {
  constructor(props) {
    super(props);

    this.head = this.head.bind(this);
    this.body = this.body.bind(this);
    this.listings = this.listings.bind(this);
    this.listing = this.listing.bind(this);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);
  }

  _redirectUnlessLoggedIn() {
    if (!this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  componentDidUpdate() {
    this._redirectUnlessLoggedIn();
  }

  handleNewSpot() {
    $(".spot-form-container").removeClass("display-none");
  }

  head() {
    return (
      <div className="host-head" onClick={this.handleNewSpot}>
        <p>I am the host head. Give me a pretty picture</p>
        <h2 className="banner">Host an Unforgettable Vacation</h2>
      </div>
    );
  }

  body() {
    return (
      <div className='host-body'>
        { this.listings() }
      </div>
    );
  }

  listing() {
    return (
      <div className='listing'>
        I am a listing
      </div>
    );
  }

  listings() {
    return (
      <div className='listings'>
        <h2 className='listings-header'>Your hosted vacations</h2>
        { this.listing() }
        { this.listing() }
        { this.listing() }
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.head() }
        <SpotFormContainer />
        { this.body() }
        <Footer />
      </div>
    );
  }
}

export default withRouter(Host);
