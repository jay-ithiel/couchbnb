import React from 'react';
import Body from '../body/body';
import Footer from '../footer/footer';

class Spot extends React.Component {
  constructor(props) {
    super(props);

    this.head = this.head.bind(this);
    this.marginRight = this.marginRight.bind(this);
    this.marginLeft = this.marginLeft.bind(this);

    this.allPhotosButton = this.allPhotosButton.bind(this);
    this.spotInfoContainer = this.spotInfoContainer.bind(this);
    this.spotInfo = this.spotInfo.bind(this);
    this.priceInfo = this.priceInfo.bind(this);

    this.body = this.body.bind(this);
    this.detailInfo = this.detailInfo.bind(this);
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

  marginRight() {
    return (
      <div className="margin-right">
      </div>
    );
  }

  marginLeft() {
    return (
      <div className="margin-left">
      </div>
    );
  }

  spotInfoContainer() {
    return (
      <div className="spot-info-container">
        { this.marginLeft() }
        { this.spotInfo() }
        { this.priceInfo() }
        { this.marginRight() }
      </div>
    );
  }

  spotInfo() {
    return (
      <div className="spot-info">

      </div>
    );
  }

  priceInfo() {
    return (
      <div className="price-info">
        <div className="price-info-head">

        </div>
        <form className="price-info-form">

        </form>
      </div>
    );
  }

  body() {
    return (
      <div className="spot-body">
        { this.marginLeft() }
        { this.detailInfo() }
        <div className="spot-body-placeholder"></div>
        { this.marginRight() }
      </div>
    );
  }

  detailInfo() {
    return (
      <div className="detail-info">

      </div>
    );
  }

  render() {
    return (
      <div className="spot">
        { this.head() }
        { this.spotInfoContainer() }
        { this.body() }
        <Footer />
      </div>
    );
  }
}

export default Spot;
