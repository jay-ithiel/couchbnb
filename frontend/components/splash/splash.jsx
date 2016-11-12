import React from 'react';
import { Link, withRouter} from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import Footer from '../footer/footer';
import Body from '../body/body';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.header = this.header.bind(this);
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

  header() {
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
      return (
        <div>
          { this.header() }
        </div>
      );
    }
  }
}

export default withRouter(Splash);
