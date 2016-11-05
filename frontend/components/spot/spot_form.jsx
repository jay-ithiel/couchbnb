import React from 'react';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        host_id: this.props.currentUser.id,
        host_name: this.props.currentUser.first_name,
        title: "",
        country: "",
        state_region: "",
        city: "",
        post_code: "",
        street_address: "",
        price_per_night: "$0",
        room_type: "Entire Place",
        bed_count: 1,
        max_guests: 1
    };

    this.spotFormContainer = this.spotFormContainer.bind(this);
    this.closeSpotForm = this.closeSpotForm.bind(this);
    this.spotForm = this.spotForm.bind(this);

    this.marginRight = this.marginRight.bind(this);
    this.marginLeft = this.marginLeft.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.maxGuestsInput = this.maxGuestsInput.bind(this);
    this.bedCountInput = this.bedCountInput.bind(this);
    this.bedGuestContainer = this.bedGuestContainer.bind(this);
    this.location = this.location.bind(this);
    this.streetAddress = this.streetAddress.bind(this);
    this.city = this.city.bind(this);
    this.stateRegion = this.stateRegion.bind(this);
    this.country = this.country.bind(this);
    this.postCode = this.postCode.bind(this);
    this.address= this.address.bind(this);

    this.handleCreateSpot = this.handleCreateSpot.bind(this);
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
      <div className="margin-left">

      </div>
    );
  }

  handleSpotFormClose() {
    $(".spot-form-container").addClass("display-none");
  }

  closeSpotForm() {
    return (
      <div className="closeSpotForm" onClick={this.handleSpotFormClose}>
        X
      </div>
    );
  }

  spotFormContainer() {
    return (
      <div className="spot-form-container display-none">
        { this.marginLeft() }
        { this.spotForm() }
        { this.marginRight() }
      </div>
    );
  }

  handleInputChange(field) {
    return(e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  maxGuestsInput() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('max_guests') }
        value={ this.state.max_guests }
        placeholder="Max Guests"
        className="bed-guest-input" />
    );
  }

  bedCountInput() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('bed_count') }
        value={ this.state.bed_count }
        placeholder="Bed Count"
        className="bed-guest-input" />
    );
  }

  bedGuestContainer() {
    return (
      <div className="bed-guest-container" >
        { this.maxGuestsInput() }
        { this.bedCountInput() }
      </div>
    );
  }

  location() {
    return (
      <div className='location'>
        { this.streetAddress() }
        { this.address()}
      </div>
    );
  }

  streetAddress() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('street_address') }
        value={ this.state.street_address }
        placeholder="Street Address"
        className="location-input" />
    );
  }

  city() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('city') }
        value={ this.state.city }
        placeholder="City"
        className="location-input-half" />
    );
  }

  stateRegion() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('state_region') }
        value={ this.state.state_region }
        placeholder="State/Region"
        className="location-input-half" />
    );
  }

  country() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('country') }
        value={ this.state.country }
        placeholder="Country"
        className="location-input-half" />
    );
  }

  postCode() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('post_code') }
        value={ this.state.post_code }
        placeholder="Postal Code"
        className="location-input-half" />
    );
  }

  address() {
    return (
      <div className="address">
          { this.city() }
          { this.stateRegion() }
          { this.country() }
          { this.postCode() }
      </div>
    );
  }

  handleCreateSpot(e) {
    e.preventDefault();
    const spot = this.state;
    this.props.createSpot( spot );

    this.setState({
        host_id: this.props.currentUser.id,
        host_name: this.props.currentUser.first_name,
        title: "",
        country: "",
        state_region: "",
        city: "",
        post_code: "",
        street_address: "",
        price_per_night: "$0",
        room_type: "Entire Place",
        bed_count: 1,
        max_guests: 1
    });

    this.handleSpotFormClose();
  }

  spotForm() {
    return (
      <form className="spotForm" onSubmit={this.handleCreateSpot}>

        <input
          type="text"
          value={ this.state.title }
          onChange={ this.handleInputChange('title') }
          placeholder="Title"
          className='spot-input'/>

        <label className="spot-form-label">
          <select className="room-type"
                  value={ this.state.room_type }
                  onChange={ this.handleInputChange('room_type') }>
            <option value="Entire place">Entire Place</option>
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
          </select>
        </label>

        { this.bedGuestContainer() }

        <input
          type="text"
          value={ this.state.price_per_night }
          onChange={ this.handleInputChange('price_per_night') }
          placeholder="Price Per Night"
          className='spot-input' />

        { this.location() }

        <button className="form-submit">Create</button>
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

export default SpotForm;
