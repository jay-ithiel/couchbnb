import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

// Actions
import { createBooking } from '../../actions/booking_actions';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    let guest_id = 1;
    if (this.props.currentUser) guest_id = this.props.currentUser.id;

    this.state = {
      spot_id: props.spot.id,
      guest_id: guest_id,
      location: null,
      check_in_date: moment(),
      check_out_date: moment(),
      num_guests: '1',
      price: 0,
      daysPrice: 0,
      serviceFee: 0,
      totalPrice: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBookingRequest = this.handleBookingRequest.bind(this);
    this._calculatePrice = this._calculatePrice.bind(this);
  }

  handleCheckIn(date) {
    // this.setState({ check_in_date: date });
    this.state['check_in_date'] = date;
    this._calculatePrice();
  }

    handleCheckOut(date) {
    // this.setState({ check_out_date: date });
    this.state['check_out_date'] = date;
    this._calculatePrice();
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleBookingRequest(e) {
    e.preventDefault();

    this.toggleNullUserWarning.bind(this)();

    if (this.props.loggedIn) {
      const booking = this.state;
      booking.check_in_date = booking.check_in_date.unix();
      booking.check_out_date = booking.check_out_date.unix();
      this.props.createBooking(booking);
      // this.props.router.push('/bookings');
    }
  }

  toggleNullUserWarning() {
    if (this.props.loggedIn) {
      $(".null-user-warning").addClass("display-none");
    } else {
      $(".null-user-warning").removeClass("display-none");
    }
  }

  _calculatePrice() {
    const spot = this.props.spot;

    let date1 = this.state.check_in_date;
    let date2 = this.state.check_out_date;
    let diffDays = date2.diff(date1, 'days');

    let priceCurrency = '$';
    let priceAmount = diffDays * spot.price_per_night;
    let daysPrice = `${priceCurrency}${priceAmount}`;

    let serviceFeeAmount = Math.round(priceAmount * .12);
    let serviceFee = `${priceCurrency}${serviceFeeAmount}`;
    let totalPriceAmount = priceAmount + serviceFeeAmount;
    let totalPrice = `${priceCurrency}${totalPriceAmount}`;

    this.setState({
      daysPrice: daysPrice,
      serviceFee: serviceFee,
      totalPrice: totalPrice,
    });
  }

  render() {
    const bookedDates = [
      moment().subtract(1, 'days'),
      moment().subtract(2, 'days'),
      moment().subtract(3, 'days'),
    ];

    const spot = this.props.spot;
    let date1 = this.state.check_in_date;
    let date2 = this.state.check_out_date;
    let diffDays = date2.diff(date1, 'days');

    return (
      <div className='price-info'>
        <div className='price-info-head'>
          <div>${spot.price_per_night}</div>
          <p>Per Night</p>
        </div>

        <form className="price-info-form" onSubmit={this.handleBookingRequest}>
          <div className="dates-guests">
            <div className="dates-guests-date">
              <label>Check In</label>
              <DatePicker
                onChange={this.handleCheckIn.bind(this)}
                selectsStart  startDate={this.state.check_in_date}
                excludeDates={ bookedDates }
                endDate={this.state.check_out_date}
                selected={this.state.check_in_date}
              />
            </div>

            <div className="dates-guests-date">
              <label>Check Out</label>
              <DatePicker
                onChange={this.handleCheckOut.bind(this)}
                excludeDates={ bookedDates }
                selectsEnd  startDate={this.state.check_in_date}
                endDate={this.state.check_out_date}
                selected={this.state.check_out_date}
              />
            </div>

            <div className="dates-guests-guest">
              <label>Guests</label>
              <div className="react-datepicker__input-container">
                <select id='bookingForm--guests' value={this.state.guests} onChange={this.handleChange('num_guests')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="price-calculations">
            <div className="price-calculations-row">
              { spot.price_per_night } x { diffDays } nights
              <p>{ this.state.daysPrice }</p>
            </div>

            <div className="price-calculations-row">
              <p>Service Fee</p>
              { this.state.serviceFee }
            </div>

            <div className='price-calculations-row'>
              <p>Total</p>
              { this.state.totalPrice }
            </div>
          </div>

          <button className="request-to-book button">Request To Book</button>

          <span className="null-user-warning display-none">
            Please log in or sign up before booking any trips!
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
