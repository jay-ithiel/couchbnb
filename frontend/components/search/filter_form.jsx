const React = require('react');
const DatePicker = require('react-datepicker');
const moment = require('moment');

// import RangeSlider from 'react-dual-rangeslider';
// const RangeSlider = require("react-dual-rangeslider");
import ReactSlider from 'react-slider';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  componentDidUpdate() {
  }

  handleChange(filter, updateFilter) {
    return (e) => {
      updateFilter(filter, e.currentTarget.value);
    };
  }

  handlePriceChange(e) {
    // dispatch update min price and update max price here
    this.props.updateMinPrice(e[0]);
    this.props.updateMaxPrice(e[1]);
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
                <DatePicker />
              </div>

              <div className="filters-row-date">
                <DatePicker />
              </div>

              <div className="filters-row-date">
                <select className="">
                  <option value="" disabled selected>Max Guests</option>
                  <option value="1">1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10+'>10+</option>
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
                <input type="radio"
                       name="room_type" />
              </div>

              <div className='filters-row-roomtype'>
                <p>Private Room</p>
                <input type="radio"
                       name="room_type" />
              </div>

              <div className='filters-row-roomtype'>
                <p>Shared Room</p>
                <input type="radio"
                       name="room_type" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="filter">Filter results:</span>
          <br/>
          <label>Minimum Price</label>
          <input
            type="number"
            value={this.props.minPrice}
            onChange={this.handleChange('minPrice', this.props.updateFilter)}/>
           <br/>
          <label>Maximum Price</label>
          <input
            type="number"
            value={this.props.maxPrice}
            onChange={this.handleChange('maxPrice', this.props.updateFilter)}/>
        </div>

        <div className="filters-row">
          <div className='filters-row-left'>
            <h2>Price Range</h2>
          </div>
          <div className="filters-row-right">
            <div className="filters-row-price">
              <ReactSlider withBars
                value={[this.props.minPrice, this.props.maxPrice]}
                min={10}
                max={1000}
                minDistance={2}
                onAfterChange={this.handlePriceChange}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default FilterForm;



//
// <div>
//   <ReactSlider defaultValue={[0, 100]} withBars />
// </div>
