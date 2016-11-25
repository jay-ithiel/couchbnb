import React from 'react';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.bookings = this.bookings.bind(this);
    this.bookingImage = this.bookingImage.bind(this);
    this.bookingInfo = this.bookingInfo.bind(this);
  }

  bookings() {
    if (this.props.currentUserBookings == null) {
      return (
        <div className='no-trips'>
          You haven't booked any trips yet!
        </div>
      );
    }

    let realCurrentUserBookings = [];
    Object.keys(this.props.realCurrentUserBookings).forEach(k => {
      let nextBooking = this.props.realCurrentUserBookings[k];
      if (!realCurrentUserBookings.includes(nextBooking)) {
        realCurrentUserBookings.push(nextBooking);
      }
    });

    let bookingLis = realCurrentUserBookings.map(booking => {
      return (
        <div className='booking' key={booking.id}>
          { this.bookingImage(booking) }
          { this.bookingInfo(booking) }
        </div>
      );
    });

    return (
      <div className='bookings'>
        <h2 className='bookings-header'>Your Upcoming Vacations</h2>
        <ul className='bookings-ul'>
          { bookingLis }
        </ul>
      </div>
    );
  }

  bookingInfo(booking) {
    return (
      <div className='booking-info'>
        <li className='booking-title'>Title: {booking.spot.title}</li>
        <li>Status: {booking.status}</li>
        <li>Location: {booking.location}</li>
        <li>Check In Date: {booking.check_in_date}</li>
        <li>Check Out Date: {booking.check_out_date}</li>
        <li>Num Guests: {booking.num_guests}</li>
        <li>Total Price: {booking.price}</li>
      </div>
    );
  }

  bookingImage(booking) {
    return (
      <img
        className='booking-image'
        src={booking.spot.spot_pic_url} >
      </img>
    );
  }

  render() {
    return (
      <div className='bookings-body'>
        { this.bookings() }
      </div>
    );
  }
}

export default Booking;
