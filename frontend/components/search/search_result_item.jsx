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
      <img
        className="search-item-spot-image"
        src={this.props.spot.spot_pic_url}>
      </img>
    );
  }

  userImage() {
    return (
      <div className='user-search-info-cont'>
        <div className='user-image-container'>
          <img
            className='search-item-user-image'
            src={this.props.spot.host.profile_pic_url}>
          </img>
        </div>
        <span className='user-image-name'>
          {this.props.spot.host.first_name}
        </span>
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
          <p>-</p>
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
