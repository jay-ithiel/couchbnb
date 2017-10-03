import React from 'react';

const Listing = ({ listing }) => (
  <div className='listing'>
    <div className='listing-image'
      style={{ backgroundImage: `url(${listing.spot_pic_url})` }}>
    </div>

    <ul className='listing-info'>
      <li className='listing-title'>
        Title: {listing.title}
        <button className='manage-bookings-button' onClick={this.goToManageSpot(listing)}>
          Manage Booking Requests
        </button>
      </li>

      <li>Price Per Night: ${ spot.price_per_night }</li>
      <li>City: { spot.city }</li>
      <li>Country: { spot.country }</li>
      <li>Room Type: { spot.room_type}</li>

      
    </ul>
  </div>
);

export default Listing;
