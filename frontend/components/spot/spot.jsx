import React from 'react';
import Body from '../body/body';
import Footer from '../footer/footer';

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
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Spot;
