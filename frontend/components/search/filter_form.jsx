const React = require('react');
const DatePicker = require('react-datepicker');
const moment = require('moment');

import ReactSlider from 'react-slider';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkIn: moment(),
      checkOut: moment(),
      roomType: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleNumGuests = this.handleNumGuests.bind(this);
    this.toggleRoomType = this.toggleRoomType.bind(this);
    this.handleRoomType = this.handleRoomType.bind(this);
  }

  componentDidUpdate() {
  }

  handleChange(filter, updateFilter) {
    return (e) => {
      updateFilter(filter, e.currentTarget.value);
    };
  }

  handlePriceChange(e) {
    this.props.updateMinPrice(e[0]);
    this.props.updateMaxPrice(e[1]);
  }

  handleCheckIn(date) {
    // will need to give spot model  functionality to filter spots index
    // where spot.open_dates > params[:check_in_date]
    //   and spot.opes_dates < params[:check_out_date]
    // for now, create temp internal state to handle Date change in UI
      // let dateUnix = date.unix();
      // this.props.updateCheckIn(dateUnix);
    this.setState({
      checkIn: date
    });
  }

  handleCheckOut(date) {
    this.setState({
      checkOut: date
    });
  }

  handleNumGuests(e) {
    this.props.updateNumGuests(e.target.value);
  }

  handleRoomType() {
    // this.props.updateRoomType(e.target.value);
    this.props.updateRoomType(this.state.roomType);
  }

  toggleRoomType(e) {
    console.log('e.target.value: ', e.target.value);
    if (e.target.value === this.state.roomType) {
      // this.setState({roomType: ""});
      this.state.roomType = "";
    } else {
      // this.setState({roomType: e.target.value});
      this.state.roomType = e.target.value;
    }
    console.log('this.state: ', this.state);
    this.handleRoomType();
  }

  render() {
    return (
      <div className="filters-container">

        <div className="filters-row">
          <div className='filters-row-left'>
            <h2>Dates</h2>
          </div>

          <div className="filters-row-right">
            <div className="filters">
              <div className="filters-row-date">
                <DatePicker
                  selected={this.state.checkIn}
                  onChange={this.handleCheckIn} />
              </div>

              <div className="filters-row-date">
                <DatePicker
                  selected={this.state.checkOut}
                  onChange={this.handleCheckOut} />
              </div>

              <div className="filters-row-date">
                <select className="" onChange={this.handleNumGuests}>
                  <option value="" disabled selected>Num Guests</option>
                  <option value="1">1 guest</option>
                  <option value='2'>2 guests</option>
                  <option value='3'>3 guests</option>
                  <option value='4'>4 guests</option>
                  <option value='5'>5 guests</option>
                  <option value='6'>6 guests</option>
                  <option value='7'>7 guests</option>
                  <option value='8'>8 guests</option>
                  <option value='9'>9 guests</option>
                  <option value='10+'>10+ guests</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="filters-row">
          <div className='filters-row-left'>
            <h2>Room Type</h2>
          </div>

          <div className="filters-row-right">
            <div className="filters">
              <div className='filters-row-roomtype'>
                <p>Entire House/Apt</p>
                <input type="checkbox"
                       value="Entire House/Apt"
                       onChange={this.toggleRoomType}
                       name="room_type" />
              </div>

              <div className='filters-row-roomtype'>
                <p>Private Room</p>
                <input type="checkbox"
                       value="Private Room"
                       onChange={this.toggleRoomType}
                       name="room_type" />
              </div>

              <div className='filters-row-roomtype'>
                <p>Shared Room</p>
                <input type="checkbox"
                       value="Shared Room"
                       onChange={this.toggleRoomType}
                       name="room_type" />
              </div>
            </div>
          </div>
        </div>

        <div className="filters-row">
          <div className='filters-row-left'>
            <h2>Price Range</h2>
          </div>
          <div className="filters-row-right-price">
            <div className="filters-row-price">
              <ReactSlider withBars
                value={[this.props.minPrice, this.props.maxPrice]}
                min={10}
                max={1000}
                minDistance={2}
                onChange={this.handlePriceChange}/>
            </div>

            <div className="filters-row-price-text">
              <p>${this.props.minPrice}</p>
              <p>${this.props.maxPrice}+</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FilterForm;



// <div>
//   <span className="filter">Filter results:</span>
//   <br/>
//   <label>Minimum Price</label>
//   <input
//     type="number"
//     value={this.props.minPrice}
//     onChange={this.handleChange('minPrice', this.props.updateFilter)}/>
//    <br/>
//   <label>Maximum Price</label>
//   <input
//     type="number"
//     value={this.props.maxPrice}
//     onChange={this.handleChange('maxPrice', this.props.updateFilter)}/>
// </div>
//
// <div>
//   <ReactSlider defaultValue={[0, 100]} withBars />
// </div>
