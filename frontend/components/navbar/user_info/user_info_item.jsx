import React from 'react';
import { withRouter } from 'react-router';

class UserInfoItem extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.logoutRedirect = this.logoutRedirect.bind(this);
  }

  logoutRedirect() {
    this.props.logout();
    this.props.router.replace('/');
  }

  logout() {
    return (
      <div className="user-info-item" onClick={this.logoutRedirect}>
        Log Out
      </div>
    );
  }

  render() {
    return(
      <div>
        { this.logout() }
        <div className="user-info-item-divider"></div>
      </div>
    );
  }
}

export default withRouter(UserInfoItem);
