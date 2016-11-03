import React from 'react';
import UserInfoItem from './user_info_item';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.userPic = this.userPic.bind(this);
    this.userInfoItems = this.userInfoItems.bind(this);
    this.toggleUserInfoItems = this.toggleUserInfoItems.bind(this);
  }

  userPic() {
    // create a pic column in the users table
    return (
      <div className="profile-pic">

      </div>
    );
  }

  userInfoItems() {
    return (
      <div className="user-info-items hidden">
        <UserInfoItem />
        <UserInfoItem />
      </div>
    );
  }

  toggleUserInfoItems() {
    $(".user-info-items").removeClass("hidden");
    $(".user-info-items").mouseleave(() => (
      $(".user-info-items").addClass("hidden")
    ));
  }

  render() {
    return (
      <div className="user-info" onClick={ this.toggleUserInfoItems }>
        <p>{ this.props.currentUser.first_name }</p>
        { this.userPic() }
        { this.userInfoItems() }
      </div>
    );
  }
}

export default UserInfo;
