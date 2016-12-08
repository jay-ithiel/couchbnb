import React from 'react';
import { Link, withRouter } from 'react-router';
import BookingsCarousel from './booking_carousel';

class ManageSpot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBooking: null,
      pendingBookings: [],
      upcomingBookings: [],
      previousBookings: []
    };

    this.bookingInfo = this.bookingInfo.bind(this);
    this.bookingImage = this.bookingImage.bind(this);
    this.hostImage = this.hostImage.bind(this);

    this.currentBooking = this.currentBooking.bind(this);
    this.pendingBookings = this.pendingBookings.bind(this);
    this.upcomingBookings = this.upcomingBookings.bind(this);
    this.previousBookings = this.previousBookings.bind(this);

    this.delegateBookings = this.delegateBookings.bind(this);
    this.approveBookingButton = this.approveBookingButton.bind(this);
    this.denyBookingButton = this.denyBookingButton.bind(this);

    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.spotId = this.props.routeParams.spot_id;
    this.props.requestSpot(this.spotId);
  }

  componentDidUpdate() {
    // this.delegateBookings();
  }


  delegateBookings() {
    let currentSpot = this.props.currentSpot[this.spotId];
    if (currentSpot == null) { return; }

    this.currentSpot = currentSpot;
    let newCurrentBooking = null;
    let newPendingBookings = [];
    let newUpcomingBookings = [];
    let newPreviousBookings = [];

    this.state = {
      currentBooking: null,
      pendingBookings: [],
      upcomingBookings: [],
      previousBookings: []
    };

    let dateNow = new Date();
    const self = this;

    currentSpot.bookings.forEach(booking => {
      if (booking.status === "PENDING") {
        newPendingBookings.push(booking);
      } else if (booking.status === "APPROVED") {
        // upcoming bookings
        let checkIn = booking.check_in_date.split('-');
        let checkOut = booking.check_out_date.split('-');
        let checkInDate = new Date(
          checkIn[0],
          checkIn[1] - 1,
          checkIn[2]
        );

        let checkOutDate = new Date(
          checkOut[0],
          checkOut[1] - 1,
          checkOut[2]
        );

        if (dateNow < checkInDate) {
          newUpcomingBookings.push(booking);
        }
        // current booking
        else if (dateNow > checkInDate && dateNow < checkOutDate) {
          newCurrentBooking = booking;
        }
        // previous bookings
        else if (dateNow > checkOutDate) {
          newPreviousBookings.push(booking);
        }
      }
    });

    this.state = {
      currentBooking: newCurrentBooking,
      pendingBookings: newPendingBookings,
      upcomingBookings: newUpcomingBookings,
      previousBookings: newPreviousBookings
    };

    // this.setState = {
    //   currentBooking: newCurrentBooking,
    //   pendingBookings: newPendingBookings,
    //   upcomingBookings: newUpcomingBookings,
    //   previousBookings: newPreviousBookings
    // };

  }

  approveBookingButton(booking) {
    const handleApprove = () => {
      () => this.props.approveBooking(booking);
    };

    return (
      <div
        onClick={ handleApprove(booking) }
        className="pending-button approve-button">
        Approve
      </div>
    );
  }

  denyBookingButton(booking) {
    const handleDeny = () => {
      () => this.props.denyBooking(booking);
    };

    return (
      <div
        onClick={ handleDeny(booking) }
        className='pending-button deny-button'>
        Deny
      </div>
    );
  }

  upcomingBookings() {
    let upcomingBookings = this.state.upcomingBookings;
    if (upcomingBookings.length === 0) { return; }

    let upcomingBookingLis = upcomingBookings.map(booking => {
      return (
        <div className='manage-booking' key={booking.id}>
          { this.bookingImage(booking) }
          { this.hostImage() }
          { this.bookingInfo(booking) }
        </div>
      );
    });

    return (
      <div className='manage-bookings-container'>
        <h2 className='manage-bookings-header'>Upcoming Bookings</h2>
        <ul className='manage-bookings-ul'>
          { upcomingBookingLis }
        </ul>
      </div>
    );
  }

  pendingBookings() {
    let pendingBookings = this.state.pendingBookings;
    if (pendingBookings.length === 0) { return; }

    let pendingBookingsLis = pendingBookings.map(booking => {
      return (
        <div className='manage-booking' key={booking.id}>
          { this.bookingImage(booking) }
          { this.hostImage() }
          { this.bookingInfo(booking) }
          { this.approveBookingButton(booking) }
          { this.denyBookingButton(booking) }
        </div>
      );
    });

    return (
      <div className='manage-bookings-container'>
        <h2 className='manage-bookings-header'>Pending Bookings</h2>
        <ul className='manage-bookings-ul'>
          { pendingBookingsLis }
        </ul>
      </div>
    );
  }

  previousBookings() {
    let previousBookings = this.state.previousBookings;
    if (previousBookings.length === 0) { return; }

    let previousBookingLis = previousBookings.map(booking => {
      return (
        <div className='manage-booking' key={booking.id}>
          { this.bookingImage(booking) }
          { this.hostImage() }
          { this.bookingInfo(booking) }
        </div>
      );
    });

    return (
      <div className='manage-bookings-container'>
        <h2 className='manage-bookings-header'>Previous Bookings</h2>
        <ul className='manage-bookings-ul'>
          { previousBookingLis }
        </ul>
      </div>
    );
  }

  currentBooking() {
    let booking = this.state.currentBooking;
    if (booking == null) { return; }

    let handleClick = () => {
      this.props.router.push(`/spots/${this.currentSpot.id}`);
    };

    return (
      <div className='current-booking-box'>
        <h2 className='current-booking-header'>Current Booking</h2>
        <div className='current-booking'>
          <img
            onClick={ handleClick }
            className='current-booking-image'
            src={this.currentSpot.spot_pic_url}>
          </img>

          <div className='current-booking-info'>
            <li className='current-booking-info-header'>
              {this.currentSpot.title}
            </li>

            <li></li>
          </div>
        </div>
      </div>
    );
  }

  bookingInfo(booking) {
    const months = {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sep',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec'
    };

    let city = booking.location.split(',')[0];
    let inDate = booking.check_in_date.split('-');
    let outDate = booking.check_out_date.split('-');
    let numGuests = `${booking.num_guests}`;
    if (numGuests === '1') {
      numGuests += ' guest';
    } else {
      numGuests += ' guests';
    }


    if (inDate[1][0] === '0') { inDate[1] = inDate[1][1]; }
    if (outDate[1][0] === '0') { outDate[1] = outDate[1][1]; }

    let checkInDate = inDate[2];
    let checkInMonth = months[inDate[1]];
    let checkInYear = `, ${inDate[0]}`;
    let checkOutDate = outDate[2];
    let checkOutMonth = months[outDate[1]];
    let checkOutYear = `, ${outDate[0]}`;

    if (checkInMonth === checkOutMonth) { checkOutMonth = ''; }
    if (checkInYear === checkOutYear) { checkInYear = ''; }

    let bookingDatesGuest = `${checkInMonth} ${checkInDate}${checkInYear} - ${checkOutMonth} ${checkOutDate}${checkOutYear} | ${numGuests}`;

    return (
      <div className="manage-booking-info">
        <li className='city'>{city}</li>
        <div>
          <li className='date-guest'>{bookingDatesGuest}</li>
          <li className ='manage-booking-title'>
            {this.currentSpot.title}
          </li>
        </div>

        <div>
          <div className='manage-info-link manage-reviews'>
            <li>* * * * *</li>
            <li>Read Your Reviews</li>
          </div>

          <div className='manage-info-link manage-price'>
            <li>Total Price: { booking.price }</li>
          </div>
        </div>
      </div>
    );
  }

  bookingImage() {
    let handleClick = () => {
      this.props.router.push(`/spots/${this.currentSpot.id}`);
    };

    return (
      <div
        onClick={ handleClick }
        className='manage-booking-image-div'>
        <img
          className='manage-booking-image'
          src={this.currentSpot.spot_pic_url}>
        </img>
      </div>
    );
  }

  hostImage() {
    return (
      // Will eventually use a 'img' tag when I have users that have
      // actual profile pictures. Otherwise, default css will add a
      // border automatically and its f***** annoying
      // src={this.currentSpot.host.profile_pic_url}>
      <div className='host-image'>

      </div>
    );
  }

  render() {
    this.delegateBookings();
    // BookingsCarousel has no style
    // <BookingsCarousel />

    // console.log('currentBooking', this.state.currentBooking);
    // console.log('pendingBookings', this.state.pendingBookings);
    // console.log('upcomingBookings', this.state.upcomingBookings);
    // console.log('previousBookings', this.state.previousBookings);

    return (
      <div>
        { this.currentBooking() }
        { this.pendingBookings() }
        { this.upcomingBookings() }
        { this.previousBookings() }
      </div>
    );
  }
}

export default withRouter(ManageSpot);
