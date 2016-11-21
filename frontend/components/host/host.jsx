import React from 'react';
import { Link, withRouter } from 'react-router';
import Footer from '../footer/footer';
import SpotFormContainer from '../spot/spot_form_container';

class Host extends React.Component {
  constructor(props) {
    super(props);

    this.head = this.head.bind(this);
    this.body = this.body.bind(this);
    this.listings = this.listings.bind(this);
    this._redirectUnlessLoggedIn = this._redirectUnlessLoggedIn.bind(this);

    this.listingImage = this.listingImage.bind(this);
    this.listingInfo = this.listingInfo.bind(this);
    this.listingInfoButtons = this.listingInfoButtons.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePreview = this.handlePreview.bind(this);

    this.toggleSpotForm = this.toggleSpotForm.bind(this);

    this.state = {
      isNewSpot: true,
      editSpotTarget: null,
      hostedSpots: props.currentUserSpots,
      isFormShowing: false
    };
  }

  _redirectUnlessLoggedIn() {
    if (!this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  componentDidMount() {

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

  head() {
    return (
      <div className="host-head">
        <h2 className="banner host-button"
            onClick={ this.toggleSpotForm }>
          Host an Unforgettable Vacation
        </h2>
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

  listingInfoButtons(spot) {
    return (
      <div className="listing-info-buttons">
        <button
          className="listing-info-button"
          onClick={ this.handleEdit(spot) }>Edit
        </button>

        <button
          className="listing-info-button"
          onClick={ this.handleDelete(spot) }>Delete
        </button>

        <button
          className="preview-button"
          onClick={ this.handlePreview(spot.id) }>Preview
        </button>
      </div>
    );
  }

  handlePreview(id) {
    return () => {
      this.props.router.push(`spots/${id}`);
    };
  }

  handleDelete(spot) {
    return () => {
      this.props.deleteSpot(spot.id);
    };
  }

  handleEdit(spot) {
    return () => {
      this.setState({ isNewSpot: false, editSpotTarget: spot });
      this.toggleSpotForm();
    };
  }

  listingInfo(spot) {
    return (
      <div className='listing-info'>
        <li className='listing-title'>Title: { spot.title }</li>
        <li>Price Per Night: { spot.price_per_night }</li>
        <li>City: { spot.city }</li>
        <li>Country: { spot.country }</li>
        <li>Room Type: { spot.room_type}</li>

        {this.listingInfoButtons(spot)}
      </div>
    );
  }

  listingImage(spot) {
    return (
      <img
        className="listing-image"
        src={spot.spot_pic_url}>
      </img>
    );
  }

  listings() {
    if (this.props.currentUserSpots == null) { return; }

    let spotLis = this.props.currentUserSpots.map(spot => {
      return (
        <div className='listing' key={ spot.id }>
          { this.listingImage(spot) }
          { this.listingInfo(spot) }
        </div>
      );
    });

    return (
      <div className='listings'>
        <h2 className='listings-header'>Your hosted vacations</h2>
        <ul className="listings-ul">
          { spotLis }
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.head() }
        <SpotFormContainer spotFormInfo={this.state} />
        { this.body() }
        <Footer />
      </div>
    );
  }
}

export default withRouter(Host);
