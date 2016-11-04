import React from 'react';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);

    this.spotFormContainer = this.spotFormContainer.bind(this);
    this.closeSpotForm = this.closeSpotForm.bind(this);
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
        I am the spot form container!
        { this.closeSpotForm() }
      </div>
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
