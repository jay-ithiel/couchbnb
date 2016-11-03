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
        <p>{ this.props.currentUser.first_name }</p>
        { this.userPic() }
      </div>
    );
  }
}

export default UserInfo;
