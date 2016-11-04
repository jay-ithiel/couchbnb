import React from 'react';

class Spot extends React.Component {
  constructor(props) {
    super(props);

    this.head = this.head.bind(this);
    this.allPhotosButton = this.allPhotosButton.bind(this);

  }

  head() {
    return (
      <div className='spot-head'>
        { this.allPhotosButton() }
      </div>
    );
  }

  allPhotosButton() {
    return (
      <div className="all-photos-button">
        View All Photos
      </div>
    );
  }

  render() {
    return (
      <div className="spot">
        { this.head() }
      </div>
    );
  }
}

export default Spot;
