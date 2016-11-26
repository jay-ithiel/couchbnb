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

    this.delegateBookings = this.delegateBookings.bind(this);
    this.currentBooking = this.currentBooking.bind(this);
    this.pendingBookings = this.pendingBookings.bind(this);
    // this.upcomingBookings = this.upcomingBookings.bind(this);
  }

  componentDidMount() {
    this.spotId = this.props.routeParams.spot_id;
    this.props.requestSpot(this.spotId);
  }

  componentWillUpdate() {
  }

  delegateBookings() {
    let currentSpot = this.props.currentSpot[this.spotId];
    if (currentSpot == null) { return; }

    this.currentSpot = currentSpot;
    console.log('delegateBookings was called');

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
        <div className='pending-booking' key={booking.id}>
          { this.bookingImage(booking) }
          { this.hostImage() }
          { this.bookingInfo(booking) }
        </div>
      );
    });

    return (
      <div className='pending-bookings-container'>
        <h2 className='pending-bookings-header'>Pending Bookings</h2>
        <ul className='pending-bookings-ul'>
          { pendingBookingsLis }
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
    let numGuests = `${booking.num_guests} guests`;

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
      <div className="pending-booking-info">
        <li className='city'>{city}</li>
        <div>
          <li className='date-guest'>{bookingDatesGuest}</li>
          <li className='pending-booking-title'>
            {this.currentSpot.title}
          </li>
        </div>


        <li>Total Price: {booking.price}</li>
      </div>
    );
  }

  bookingImage() {
    return (
      <div className='pending-booking-image-div'>
        <img
          className='pending-booking-image'
          src={this.currentSpot.spot_pic_url}>
        </img>
      </div>
    );
  }

  hostImage() {
    console.log('host image wal called');
    return (
      <img
        className='host-image'
        src={this.currentSpot.host.profile_pic_url}>
      </img>
    );
  }

  render() {
    this.delegateBookings();
    // BookingsCarousel has no style
    // <BookingsCarousel />
    return (
      <div>
        { this.currentBooking() }
        { this.pendingBookings() }
      </div>
    );
  }
}

export default ManageSpot;
