import React from 'react';

class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.bookings = this.bookings.bind(this);
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
        <div className='booking' key={ booking.id }>
          { this.booking }
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        { this.bookings() }
      </div>
    );
  }
}

export default Booking;
