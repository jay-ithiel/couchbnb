import React from 'react';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spot: {
        hostId: this.props.currentUser.id,
        hostName: this.props.currentUser.first_name,
        title: "",
        country: "",
        stateRegion: "",
        postCode: "",
        streetAddress: "",
        pricePerNight: "$0",
        roomType: "Entire Place",
        bedCount: 1,
        maxGuests: 1
      }
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
    this.stateProvince = this.country.bind(this);
    this.country = this.country.bind(this);
    this.postalCode = this.postalCode.bind(this);
    this.address= this.address.bind(this);
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
      this.setState({ [field]: e.target.value() })
    );
  }

  maxGuestsInput() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('maxGuests') }
        placeholder="Max Guests"
        className="bed-guest-input" />
    );
  }

  bedCountInput() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('bedCount') }
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
        onChange={ this.handleInputChange('streetAddress') }
        placeholder="Street Address"
        className="location-input" />
    );
  }

  city() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('city') }
        placeholder="City"
        className="location-input-half" />
    );
  }

  stateProvince() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('stateProvince') }
        placeholder="State/Province"
        className="location-input-half" />
    );
  }

  country() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('country') }
        placeholder="Country"
        className="location-input-half" />
    );
  }

  postalCode() {
    return (
      <input
        type="text"
        onChange={ this.handleInputChange('postalCode') }
        placeholder="Postal Code"
        className="location-input-half" />
    );
  }

  address() {
    return (
      <div className="address">
        { this.city() }
        { this.stateProvince() }
        { this.country() }
        { this.postalCode() }
      </div>
    );
  }



  spotForm() {
    return (
      <form className="spotForm">

        <input
          type="text"
          onChange={ this.handleInputChange('title') }
          placeHolder="Title"
          className="location-input" />

        { this.location() }

        <label className="spot-form-label">Room Type
          <select defaultValue="Entire Place"
                  className="room-type"
                  onChange={ this.handleInputChange('roomType') } >

            <option value="Entire place">Entire Place</option>
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
          </select>
        </label>

        { this.bedGuestContainer() }


        <label></label>
        <button>Next</button>
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
