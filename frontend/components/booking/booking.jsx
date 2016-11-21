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

    let bookingLis = this.props.currentUserBookings.map(booking => {
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
    // this.line throws errors because association is not working
    // <li className='booking-title'>Title: {booking.spot.title}</li>
    return (
      <div className='booking-info'>
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
        src="" >
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
