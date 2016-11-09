import React from 'react';
import Body from '../body/body';
import Footer from '../footer/footer';
import { withRouter } from 'react-router';

import BookingFormContainer from '../booking/booking_form_container';

var DatePicker = require('react-datepicker');
var moment = require('moment');


class Spot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spot_id: this.props.routeParams.spot_id,
      guest_id: this.props.currentUser.id || 1,
      location: null,
      check_in_date: moment(),
      check_out_date: moment(),
      num_guests: '1',
      price: 0
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
    this.spotId = this.props.routeParams.spot_id;
    this.props.requestSpot(this.spotId);
  }

  componentDidUpdate() {
    this.spot = this.props.spots[this.spotId];
    if (this.spot === undefined) { return; }
    this.location = `${this.spot.city}, ${this.spot.state_region}, ${this.spot.country}`;
    this.currency = this.spot.price_per_night.slice(0,1);

    if (this.state.location === null) {
      this.setState({
        location: this.location
      });
    }

    if (this.state.price !== this.totalPrice) {
      this.setState({
        price: this.totalPrice
      });
    }
  }

  head() {
    return (
      <div className='spot-head'>
        { this.headImg() }
      </div>
    );
  }

  headImg() {
    if (this.spot === undefined) { return; }
    if (this.spot === undefined) { return; }

    return (
      <img
        className="head-img"
        src={this.spot.spot_pic_url}>
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
    if (this.spot === undefined) { return; }

    return (
      <div className="spot-info">
        <div className="host-info-side">
          <div className="host-info-side-pic">

          </div>

          <div className="host-info-side-name">
            { this.spot.host_name }
          </div>
        </div>

        <div className="spot-info-side">
          <div className="spot-info-side-top">
            <h2>{ this.spot.title }</h2>
            <p>{ this.location }</p>
          </div>

          <div className="spot-info-side-bottom">
            <div>
              { this.roomTypeIcon(this.spot.room_type) }
              { this.spot.room_type }
            </div>

            <div>
              { this.guestIcon() }
              { this.spot.max_guests } Guests
            </div>

            <div>
              { this.bedIcon() }
              { this.spot.bed_count } Beds
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
    if (this.spot === undefined) { return; }

    let date1 = this.state.check_in_date;
    let date2 = this.state.check_out_date;
    let diffDays = date2.diff(date1, 'days');

    let priceCurrency = this.spot.price_per_night.slice(0,1);
    let priceAmount = diffDays * parseInt(this.spot.price_per_night.slice(1));
    let daysPrice = `${priceCurrency}${priceAmount}`;

    let serviceFeeAmount = priceAmount * .12;
    let serviceFee = `${priceCurrency}${serviceFeeAmount}`;
    let totalPriceAmount = priceAmount + serviceFeeAmount;
    let totalPrice = `${priceCurrency}${totalPriceAmount}`;
    this.totalPrice = totalPrice;

    const handleCheckIn = date => {
      this.setState({
        check_in_date: date
      });
    };

    const handleCheckOut = date => {
      this.setState({
        check_out_date: date
      });
    };

    const handleGuests = field => {
      return (e) => {
        this.setState({
          [field]: e.target.value
        });
      };
    };

    const handleBookingRequest = (e) => {
      e.preventDefault;
      const booking = this.state;
      booking.check_in_date = booking.check_in_date.unix();
      booking.check_out_date = booking.check_out_date.unix();
      // alert("You have been blacklisted from this listing. Please try again later");
      this.props.createBooking(booking);

      this.setState({
        spot_id: this.props.routeParams.spot_id,
        guest_id: this.props.currentUser.id,
        location: null,
        check_in_date: moment(),
        check_out_date: moment(),
        num_guests: '1',
        price: `${this.currency}0`
      });

    };

    const bookedDates = [
      moment().subtract(1, 'days'),
      moment().subtract(2, 'days'),
      moment().subtract(3, 'days')
    ];

    return (
      <div className="price-info">
        <div className="price-info-head">
          <div>
            { this.spot.price_per_night }
          </div>
          <p>Per Night</p>
        </div>

        <form className="price-info-form" onSubmit={handleBookingRequest}>
          <div className="dates-guests">
            <div className="dates-guests-date">
              <label>Check In</label>
              <DatePicker
                onChange={handleCheckIn}
                selectsStart  startDate={this.state.check_in_date}
                excludeDates={ bookedDates }
                endDate={this.state.check_out_date}
                selected={this.state.check_in_date} />
            </div>

            <div className="dates-guests-date">
              <label>Check Out</label>
              <DatePicker
                onChange={handleCheckOut}
                excludeDates={ bookedDates }
                selectsEnd  startDate={this.state.check_in_date}
                endDate={this.state.check_out_date}
                selected={this.state.check_out_date} />
            </div>

            <div className="dates-guests-guest">
              <label>Guests</label>
              <div className="react-datepicker__input-container">
                <select value={this.state.guests}
                        onChange={handleGuests('num_guests')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="price-calculations">
            <div className="price-calculations-row">
              { this.spot.price_per_night } x { diffDays } nights
              <p>{ daysPrice }</p>
            </div>

            <div className="price-calculations-row">
              <p>Service Fee</p>
              { serviceFee }
            </div>

            <div className='price-calculations-row'>
              <p>Total</p>
              { this.state.price }
            </div>
          </div>

          <button className="request-to-book button">Request To Book</button>
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
    if (this.spot === undefined) { return; }

    return (
      <div className="detail-info">
        <h2>About this listing</h2>
        <p>
          { this.spot.description }
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

export default withRouter(Spot);
