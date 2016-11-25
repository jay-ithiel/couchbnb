import React from 'react';
import { Link, withRouter } from 'react-router';

class ManageSpot extends React.Component {
  constructor(props) {
    super(props);

    this.currentSpot = null;

    this.state = {
      currentBooking: null,
      pendingBookings: [],
      upcomingBookings: [],
      previousBookings: []
    };

    this.bookings = this.bookings.bind(this);
    this.bookingInfo = this.bookingInfo.bind(this);
    this.bookingImage = this.bookingImage.bind(this);

    this.currentBooking = this.currentBooking.bind(this);
    this.pendingBookings = this.pendingBookings.bind(this);

  }

  componentDidMount() {
    this.spotId = this.props.routeParams.spot_id;
    this.props.requestSpot(this.spotId);
  }

  delegateBookings() {
    let currentSpot = this.props.currentSpot[this.spotId];
    if (currentSpot == null) { return; }

    let dateNow = new Date();

    currentSpot.bookings.forEach(booking => {
      if (booking.status === "PENDING") {
        this.state.pendingBookings.push(booking);
      } else if (booking.status === "APPROVED") {
        // upcoming bookings
        if (dateNow < booking.check_in_date) {
          this.state.upcomingBookings.push(booking);
        }
        // current booking
        else if (dateNow > booking.check_in_date &&
                 dateNow < booking.check_out_date) {
          this.state.currentBooking = booking;
        }
        // previous bookings
        else if (dateNow > booking.check_out_date) {
          this.state.previousBookings.push(booking);
        }
      }
    });
  }

  pendingBookings() {
    let pendingBookings = this.state.pendingBookings;
    if (pendingBookings.length === 0) { return; }

    let pendingBookingsLis = pendingBookings.map(booking => {
      return (
        <div className='manage-booking' key={booking.id}>
          { this.bookingImage(booking) }
          { this.bookingInfo(booking) }
        </div>
      );
    });
  }

  bookings() {
    this.currentSpot = this.props.currentSpot[this.spotId];
    if (this.currentSpot == null) { return; }

    if (this.currentSpot.bookings.length === 0) {
      return (
        <div className='no-trips'>
          This vacation has not been booked yet!
        </div>
      );
    }

    let bookingLis = this.currentSpot.bookings.map(booking => {
      return (
        <div className='booking' key={booking.id}>
          { this.bookingImage(booking) }
          { this.bookingInfo(booking) }
        </div>
      );
    });

    return (
      <div className='bookings'>
        <h2 className='bookings-header'>This vacation's bookings</h2>
        <ul className='bookings-ul'>
          { bookingLis }
        </ul>
      </div>
    );
  }

  currentBooking() {
    let booking = this.state.currentBooking;
    if (booking == null) { return; }

    return (
      <div className='bookings'>
        <h2 className='bookings-header'>Current Booking</h2>
        <div className="booking">
          { this.bookingImage(booking) }
          { this.bookingInfo(booking) }
        </div>
      </div>
    );
  }

  bookingInfo(booking) {
    return (
      <div className="booking-info">
        <li className='booking-title'>Title: {this.currentSpot.title}</li>
        <li>Status: {booking.status}</li>
        <li>Location: {booking.location}</li>
        <li>Check In Date: {booking.check_in_date}</li>
        <li>Check Out Date: {booking.check_out_date}</li>
        <li>Num Guests: {booking.num_guests}</li>
        <li>Total Price: {booking.price}</li>
      </div>
    );
  }

  bookingImage() {
    return (
      <img
        className='booking-image'
        src={this.currentSpot.spot_pic_url}>
      </img>
    );
  }

  render() {
    debugger;
    return (
      <div className='bookings-body'>
        { this.currentBooking() }
        { this.pendingBookings() }
      </div>
    );
  }
}

export default ManageSpot;
