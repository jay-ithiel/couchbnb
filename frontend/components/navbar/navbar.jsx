import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.loginLink = this.loginLink.bind(this);
    this.userWelcome = this.userWelcome.bind(this);
    this.signupLink = this.signupLink.bind(this);
    this.logo = this.logo.bind(this);
  }

  userWelcome(currentUser, logout) {
    return(
      <div>
        <h2>Welcome {currentUser.first_name}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  loginLink() {
    return (
      <div className="header-login">
        <Link to="/login">
          <p>Log In</p>
        </Link>
      </div>
    );
  }

  signupLink() {
    return (
      <div className="header-signup">
        <Link to="/signup">
          Sign Up
        </Link>
      </div>
    );
  }

  logo() {
    return (
      <div className="logo">
        <h1>Couchbnb</h1>
      </div>
    );
  }

  render() {
    return(
      <div className="navbar">
        { this.logo() }
        { this.loginLink() }
      </div>
    );
  }
}

export default Navbar;
