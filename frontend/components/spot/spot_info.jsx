import React from 'react';

const roomTypeIcon = roomType => {
  switch(roomType) {
    case 'Entire House/Apt':
      return (
        <img
          className="spot-icon"
          src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/entire-home_apt_iqmboe.png">
        </img>
      );

    case 'Private Room':
      return (
        <img
          className="spot-icon"
          src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/private-room_nlmeda.png">
        </img>
      );

    case 'Shared Room':
      return (
        <img
          className="spot-icon-wide"
          src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/shared-room_z3mqza.png">
        </img>
      );

    default:
      return <div></div>;
  }
};

const SpotInfo = ({ spot }) => {
  let location = `${spot.city}, ${spot.state_region}, ${spot.country}`

  return (
    <div className="spot-info">
      <div className="host-info-side">
        <div className="host-info-side-pic-container">
          <img
            className='host-info-side-pic'
            src={spot.host.profile_pic_url}>
          </img>
        </div>

        <div className="host-info-side-name">
          {spot.host.first_name}
        </div>
      </div>

      <div className="spot-info-side">
        <div className="spot-info-side-top">
          <h2>{spot.title}</h2>
          <p>{location}</p>
        </div>

        <div className="spot-info-side-bottom">
          <div>
            {roomTypeIcon(spot.room_type)}
            {spot.room_type}
          </div>

          <div>
            <img className="spot-icon" src="http://res.cloudinary.com/ddgtwtbre/image/upload/v1478491815/guests_bnbtqt.png"/>
            {spot.max_guests} Guests
          </div>

          <div>
            <img className="spot-icon" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1478491173/bed_b4d2i6.png"/>
            {spot.bed_count} Beds
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotInfo;
