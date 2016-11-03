import React from 'react';
import { Link, withRouter} from 'react-router';
import SessionFormContainer from '../session/session_form_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundImage = this.backgroundImage.bind(this);
    this.banner = this.banner.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  banner() {
    return (
      <h2 className="banner">Stay with Locals and Travel the World</h2>
    );
  }

  sessionLinks() {
    return (
      <div className="session-links">
        { this.guestLogin() }
        <SessionFormContainer loginForm={false} />
      </div>
    );
  }

  guestLogin() {
    return (
      <div className="guest-login"
           onClick={this.props.guestLogin}>
        <p>Guest Login</p>
      </div>
    );
  }

  backgroundImage() {
    return (
      <div className="main-pic">
        { this.banner() }
        { this.sessionLinks() }
      </div>
    );
  }

  render() {
    if (this.props.loggedIn) {
      return (<div></div>);
    } else {
      return this.backgroundImage();
    }
  }
}

export default withRouter(Splash);
