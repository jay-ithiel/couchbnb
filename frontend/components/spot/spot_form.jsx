import React from 'react';
import { withRouter } from 'react-router';
// import { CITIES } from '../../util/city_coords_api_util';
const CITIES = require('../../util/city_coords_api_util');

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.spotFormInfo.editSpotTarget || {
        host_id: this.props.currentUser.id,
        host_name: this.props.currentUser.first_name,
        title: "",
        description: "",
        country: "",
        state_region: "",
        city: "",
        post_code: "",
        street_address: "",
        price_per_night: "",
        room_type: "",
        bed_count: "",
        max_guests: "",
        lat: 0.0,
        lng: 0.0
    };

    this.marginRight = this.marginRight.bind(this);
    this.marginLeft = this.marginLeft.bind(this);

    this.handleSpotFormClose = this.handleSpotFormClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.closeSpotForm = this.closeSpotForm.bind(this);
    this.spotFormImage = this.spotFormImage.bind(this);
    this.spotFormContainer = this.spotFormContainer.bind(this);

    this.setCoords = this.setCoords.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.spotForm = this.spotForm.bind(this);
  }

  marginRight() {
    return (
      <div className="margin-right">
        { this.closeSpotForm() }
      </div>
    );
  }

  marginLeft() {
    return (
      <div className="margin-left"></div>
    );
  }

  handleSpotFormClose() {
    $(".spot-form-container").addClass("display-none");
  }

  closeSpotForm() {
    return (
      <div className="close-spot-form" onClick={this.handleSpotFormClose}>
        X
      </div>
    );
  }

  handleInputChange(field) {
    return(e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  spotFormImage() {
    return (
      <img
        className="spot-form-image"
        src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478412229/sf-golden-gate-couple_fy0y0n.png" />
    );
  }

  spotFormContainer() {
    return (
      <div className="spot-form-container display-none">
        { this.marginLeft() }
        { this.spotForm() }
        { this.spotFormImage() }
        { this.marginRight() }
      </div>
    );
  }

  setCoords(city) {
    this.setState({
      city: city.name,
      lat: city.lat,
      lng: city.lng
    });
  }

  handleCityChange(e) {
    let selectedCity = e.target.value;
    this.setCoords(CITIES[selectedCity]);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spot = this.state;
    this.props.processForm(spot);

    // this.setState({
    //     host_id: this.props.currentUser.id,
    //     host_name: this.props.currentUser.first_name,
    //     title: "",
    //     country: "",
    //     state_region: "",
    //     city: "",
    //     post_code: "",
    //     street_address: "",
    //     price_per_night: "",
    //     room_type: "Room Type",
    //     bed_count: 'Bed Count',
    //     max_guests: 'Max Guests',
    //     lat: 0.0,
    //     lng: 0.0
    // });
  }

  spotForm() {
    const errors = this.props.errors;
    let errorsLi;
    if (errors) {
      errorsLi = errors.map((error, i) => (
        <li key={i}>{error}</li>
      ));
    }

    return (
      <form className="spotForm" onSubmit={this.handleSubmit}>

        <ul>
          { errorsLi }
        </ul>

        <div className="spot-form-row">
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange('title')}
            className="input"
            placeholder="Title" />
        </div>

        <div className="spot-form-row description">
          <textarea
            className="spot-form-description"
            placeholder="Short description"
            onChange={this.handleInputChange('description')}
            value={this.state.description}>
          </textarea>
        </div>

        <div className="spot-form-row">
          <select className="select-input"
                  value={ this.state.room_type }
                  onChange={ this.handleInputChange('room_type') }>
            <option value="" disabled selected>Room Type</option>
            <option value="Entire House/Apt">Entire House/Apt</option>
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
          </select>

          <input
            type="text"
            value={ this.state.price_per_night }
            onChange={ this.handleInputChange('price_per_night') }
            placeholder="Price Per Night"
            className='input-half' />
        </div>

        <div className="spot-form-row">
          <select className="select-input"
                  value={ this.state.max_guests }
                  onChange={ this.handleInputChange('max_guests') }>
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

          <select className="select-input"
                  value={ this.state.bed_count }
                  onChange={ this.handleInputChange('bed_count') }>
            <option value="" disabled selected>Bed Count</option>
            <option value='0'>0</option>
            <option value='1'>1</option>
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

        <div className="spot-form-row">
          <input
            type="text"
            onChange={ this.handleInputChange('street_address') }
            value={ this.state.street_address }
            placeholder="Street Address"
            className="input" />
        </div>

        <div className="spot-form-row">
          <select className="select-input"
                  value={ this.state.city }
                  onChange={ this.handleCityChange }>
            <option value="" disabled selected>City</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Cape Town">Cape Town</option>
            <option value="London">London</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Paris">Paris</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Seoul">Seoul</option>
          </select>

          <input
            type="text"
            onChange={ this.handleInputChange('state_region') }
            value={ this.state.state_region }
            placeholder="State/Region"
            className="input-half" />
        </div>

        <div className="spot-form-row">
          <select className="select-input"
                  value={ this.state.country }
                  onChange={ this.handleInputChange('country') }>
            <option value="" disabled selected>Country</option>
            <option value="France">France</option>
            <option value="Netherlands">Netherlands</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
          </select>

          <input
            type="text"
            onChange={ this.handleInputChange('post_code') }
            value={ this.state.post_code }
            placeholder="Post Code"
            className="input-half" />
        </div>

        <button className="spot-form-row button">Create</button>
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.spotFormContainer() }
      </div>
    );
  }
}

export default withRouter(SpotForm);
