import React from 'react';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);

    this.spotImage = this.spotImage.bind(this);
    this.info = this.info.bind(this);
    this.userImage = this.userImage.bind(this);
  }

  spotImage() {
    return (
      <div className="search-item-spot-image">

      </div>
    );
  }

  userImage() {
    return (
      <div className="search-item-user-image">

      </div>
    );
  }

  info() {
    const spot = this.props.spot;

    return (
      <div className="search-result-item-info">
        { spot.title }
        { this.userImage() }
        <div>
          <p>{ spot.room_type }</p>
          <div className="bullet"></div>
          <p>{ spot.max_guests } guests</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="search-result-item">
        {this.spotImage()}
        {this.info()}
      </div>
    );
  }
}

export default SearchResultItem;
