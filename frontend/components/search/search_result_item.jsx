import React from 'react';

const HostInfo = ({ host }) => (
  <div className='user-search-info-cont'>
    <div className='user-image-container'>
      <img className='search-item-user-image' src={host.profile_pic_url}/>
    </div>
    <span className='user-image-name'>
      {host.first_name}
    </span>
  </div>
);

const SearchResultItem = ({ spot }) => (
  <div className="search-result-item">
    <img className="search-item-spot-image" src={spot.spot_pic_url}/>

    <div className="search-result-item-info">
      { spot.title }

      <HostInfo host={spot.host}/>

      <div>
        <p>{ spot.room_type }</p>
        <p>-</p>
        <p>{ spot.max_guests } guests</p>
      </div>
    </div>
  </div>
);

export default SearchResultItem;
