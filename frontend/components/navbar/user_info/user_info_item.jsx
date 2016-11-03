import React from 'react';
import { withRouter } from 'react-router';

class UserInfoItem extends React.Component {
  constructor(props) {
    super(props);

    this.displayLogout = this.displayLogout.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout();
  }

  displayLogout() {
    return (
      <div className="user-info-item" onClick={this.handleLogout}>
        Log Out
      </div>
    );
  }

  render() {
    return(
      <div>
        { this.displayLogout() }
        <div className="user-info-item-divider"></div>
      </div>
    );
  }
}

export default withRouter(UserInfoItem);
