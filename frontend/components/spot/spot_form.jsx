import React from 'react';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.spotFormContainer = this.spotFormContainer.bind(this);
    this.closeSpotForm = this.closeSpotForm.bind(this);
    this.spotForm = this.spotForm.bind(this);

    this.marginRight = this.marginRight.bind(this);
    this.marginLeft = this.marginLeft.bind(this);
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
  //
  // <select>
  //   <option value="volvo">Volvo</option>
  //   <option value="saab">Saab</option>
  //   <option value="vw">VW</option>
  //   <option value="audi" selected>Audi</option>
  // </select>

  spotForm() {
    return (
      <form className="spotForm">

        <select className="room-type">
          <option value="Entire place" selected>Entire Place</option>
          <option value="Private Room">Private Room</option>
          <option value="Shared Room">Shared Room</option>
        </select>

        <input
          type="text"
          placeholder="Bed Count" />

        <input
          type="text"
          placeholder="Max Guests" />

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
