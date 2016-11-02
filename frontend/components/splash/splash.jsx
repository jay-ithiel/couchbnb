import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundImage = this.backgroundImage.bind(this);
    this.signupLink = this.signupLink.bind(this);
  }

  signupLink() {
    return (
      <div className="splash-signup">
        <Link to="/signup">
          Sign Up
        </Link>
      </div>
    );
  }

  backgroundImage() {
    return (
      <div className="main-pic">
        { this.signupLink() }
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
