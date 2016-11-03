import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.userPic = this.userPic.bind(this);
  }

  userPic() {
    // create a pic column in the users table
    // make it a sphere
    return (
      <div className="profile-pic">

      </div>
    );
  }

  render() {
    return (
      <div className="user-info">
        { this.props.currentUser.first_name }
        { this.userPic() }
      </div>
    );
  }
}

export default UserInfo;
