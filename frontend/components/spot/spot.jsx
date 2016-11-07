import React from 'react';
import Body from '../body/body';
import Footer from '../footer/footer';

var DatePicker = require('react-datepicker');
var moment = require('moment');


class Spot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkIn: moment(),
      checkOut: moment(),
      guests: '1'
    };

    this.head = this.head.bind(this);
    this.headImg = this.headImg.bind(this);
    this.marginRight = this.marginRight.bind(this);
    this.marginLeft = this.marginLeft.bind(this);

    this.allPhotosButton = this.allPhotosButton.bind(this);
    this.spotInfoContainer = this.spotInfoContainer.bind(this);
    this.spotInfo = this.spotInfo.bind(this);
    this.priceInfo = this.priceInfo.bind(this);

    this.body = this.body.bind(this);
    this.detailInfo = this.detailInfo.bind(this);

    this.roomTypeIcon = this.roomTypeIcon.bind(this);
    this.bedIcon = this.bedIcon.bind(this);
    this.guestIcon = this.guestIcon.bind(this);
  }

  componentDidMount() {
    let spotId = this.props.routeParams.spot_id;
    this.props.requestSpot(spotId);
  }

  head() {
    return (
      <div className='spot-head'>
        { this.headImg() }
      </div>
    );
  }

  headImg() {
    const spotId = this.props.routeParams.spot_id;
    const spot = this.props.spots[spotId];
    if (spot === undefined) { return; }

    return (
      <img
        className="head-img"
        src={spot.spot_pic_url}>
      </img>
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
            <div>
              { this.roomTypeIcon(spot.room_type) }
              { spot.room_type }
            </div>

            <div>
              { this.guestIcon() }
              { spot.max_guests } Guests
            </div>

            <div>
              { this.bedIcon() }
              { spot.bed_count } Beds
            </div>
          </div>
        </div>
      </div>
    );
  }

  roomTypeIcon(roomType) {
    switch(roomType) {
      case 'Entire House/Apt':
        return (
          <img
            className="spot-icon"
            src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/entire-home_apt_iqmboe.png">
          </img>
        );

      case 'Private Room':
        return (
          <img
            className="spot-icon"
            src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/private-room_nlmeda.png">
          </img>
        );

      case 'Shared Room':
        return (
          <img
            className="spot-icon-wide"
            src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/shared-room_z3mqza.png">
          </img>
        );

      default:
        return (
          <div>
            I don't know what you are.
          </div>
        );
    }
  }

  guestIcon() {
    return (
      <img
        className="spot-icon"
        src="http://res.cloudinary.com/ddgtwtbre/image/upload/v1478491815/guests_bnbtqt.png">
      </img>
    );
  }

  bedIcon() {
    return (
      <img
        className="spot-icon"
        src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/bed_b4d2i6.png">
      </img>
    );
  }

  priceInfo() {
    const spotId = this.props.routeParams.spot_id;
    const spot = this.props.spots[spotId];
    if (spot === undefined) { return; }

    const handleCheckIn = date => {
      this.setState({
        checkIn: date
      });
    };

    const handleCheckOut = date => {
      this.setState({
        checkOut: date
      });
    };

    const handleGuests = field => {
      return (e) => {
        this.setState({
          [field]: e.target.value
        });
      };
    };

    return (
      <div className="price-info">
        <div className="price-info-head">
          <div>
            { spot.price_per_night }
          </div>
          <p>Per Night</p>
        </div>

        <form className="price-info-form">
          <div className="dates-guests">
            <div className="dates-guests-date">
              <label>Check In</label>
              <DatePicker
                onChange={handleCheckIn}
                selected={this.state.checkIn} />
            </div>

            <div className="dates-guests-date">
              <label>Check Out</label>
              <DatePicker
                onChange={handleCheckOut}
                selected={this.state.checkOut} />
            </div>

            <div className="dates-guests-guest">
              <label>Guests</label>
              <div className="react-datepicker__input-container">
                <select value={this.state.guests}
                        onChange={this.handleGuests}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
          </div>
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
    const spotId = this.props.routeParams.spot_id;
    const spot = this.props.spots[spotId];
    if (spot === undefined) { return; }

    return (
      <div className="detail-info">
        <h2>About this listing</h2>
        <p>
          { spot.description }

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
