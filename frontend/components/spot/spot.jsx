import React from 'react';
import Body from '../body/body';
import Footer from '../footer/footer';

class Spot extends React.Component {
  constructor(props) {
    super(props);

    this.head = this.head.bind(this);
    this.marginRight = this.marginRight.bind(this);
    this.marginLeft = this.marginLeft.bind(this);

    this.allPhotosButton = this.allPhotosButton.bind(this);
    this.spotInfoContainer = this.spotInfoContainer.bind(this);
    this.spotInfo = this.spotInfo.bind(this);
    this.priceInfo = this.priceInfo.bind(this);

    this.body = this.body.bind(this);
    this.detailInfo = this.detailInfo.bind(this);
  }

  componentDidMount() {
    let spotId = this.props.routeParams.spot_id;
    this.props.requestSpot(spotId);
  }

  head() {
    return (
      <div className='spot-head'>
        { this.allPhotosButton() }
      </div>
    );
  }

  allPhotosButton() {
    return (
      <div className="all-photos-button">
        View Photos
      </div>
    );
  }

  marginRight() {
    return (
      <div className="margin-right">
      </div>
    );
  }

  marginLeft() {
    return (
      <div className="margin-left">
      </div>
    );
  }

  spotInfoContainer() {
    return (
      <div className="spot-info-container">
        { this.marginLeft() }
        { this.spotInfo() }
        { this.priceInfo() }
        { this.marginRight() }
      </div>
    );
  }

  spotInfo() {
    const spotId = this.props.routeParams.spot_id;
    const spot = this.props.spots[spotId];
    if (spot === undefined) { return; }

    const location = `${spot.city}, ${spot.state_region}, ${spot.country}`;

    return (
      <div className="spot-info">
        <div className="host-info-side">
          <div className="host-info-side-pic">

          </div>

          <div className="host-info-side-name">
            { spot.host_name }
          </div>
        </div>

        <div className="spot-info-side">
          <div className="spot-info-side-top">
            <h2>{ spot.title }</h2>
            <p>{ location }</p>
          </div>

          <div className="spot-info-side-bottom">
            <div>{ spot.room_type }</div>
            <div>{ spot.max_guests }</div>
            <div>{ spot.bed_count }</div>
          </div>
        </div>
      </div>
    );
  }

  priceInfo() {
    const spotId = this.props.routeParams.spot_id;
    const spot = this.props.spots[spotId];
    if (spot === undefined) { return; }

    return (
      <div className="price-info">
        <div className="price-info-head">
          <div>
            { spot.price_per_night }
          </div>
          <p>Per Night</p>
        </div>
        <form className="price-info-form">

        </form>
      </div>
    );
  }

  body() {
    return (
      <div className="spot-body">
        { this.marginLeft() }
        { this.detailInfo() }
        <div className="spot-body-placeholder"></div>
        { this.marginRight() }
      </div>
    );
  }

  detailInfo() {
    return (
      <div className="detail-info">
        <h2>About this listing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="spot">
        { this.head() }
        { this.spotInfoContainer() }
        { this.body() }
        <Footer />
      </div>
    );
  }
}

export default Spot;
