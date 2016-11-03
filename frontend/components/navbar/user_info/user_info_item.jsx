import React from 'react';

class UserInfoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>  
        <div className="user-info-item">
          I am a UserInfoItem
        </div>
        <div className="user-info-item-divider"></div>
      </div>
    );
  }
}

export default UserInfoItem;
