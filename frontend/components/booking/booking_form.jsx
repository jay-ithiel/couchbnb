import React from 'react';

var DatePicker = require('react-datepicker');
var moment = require('moment');

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   spot_id: this.props.routeParams.spot_id,
    //   guest_id: this.props.currentUser.id || 1,
    //   location: null,
    //   check_in_date: moment(),
    //   check_out_date: moment(),
    //   num_guests: '1',
    //   price: 0
    // };
  }

  render() {
    return (
      <div>
        I am booking form.
      </div>
    );
  }
}

export default BookingForm;
