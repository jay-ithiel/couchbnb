import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundImage = this.backgroundImage.bind(this);
    this.banner = this.banner.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.signupLink = this.signupLink.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
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
        { this.signupLink() }
      </div>
    );
  }

  guestLogin() {
    return (
      <div className="guest-login">
        Guest Login
      </div>
    );
  }

  signupLink() {
    return (
      <div className="signup">
        <Link to="/signup">
          Sign Up
        </Link>
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
    return (
      <div>
        { this.backgroundImage() }
      </div>
    );
  }
}

export default Splash;
