import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.userPic = this.userPic.bind(this);
    this.userInfoContainer = this.userInfoContainer.bind(this);
  }

  userPic() {
    // create a pic column in the users table
    return (
      <div className="profile-pic">

      </div>
    );
  }

  userInfoItems() {

  }

  userInfoContainer() {
    return (
      <div className="user-info">
        <p>{ this.props.currentUser.first_name }</p>
        { this.userPic() }
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.userInfoContainer() }
      </div>
    );
  }
}

export default UserInfo;
