import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import UserInfoContainer from './user_info/user_info_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.loginLink = this.loginLink.bind(this);
    this.userWelcome = this.userWelcome.bind(this);
    this.logo = this.logo.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  handleClickLogin() {
    this.setState({
      modalOpen: true,
      login: true
    });
  }

  handleClickSignup() {
    this.setState({
      modalOpen: true,
      login: false
    });
  }

  searchBar() {
    return (
      <div className="search-bar-container">
        <input type="text"
               name="search"
               className="search-bar"
               placeholder="Where to?"/>
      </div>
    );
  }

  userWelcome(currentUser, logout) {
    return (
      <div>
        <h2>Welcome {currentUser.first_name}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  loginLink() {
    if (this.props.currentUser) {
      return (
        <UserInfoContainer />
      );
    } else {
      return (
        <SessionFormContainer loginForm={true} />
      );
    }
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
        { this.searchBar() }
        { this.loginLink() }
      </div>
    );
  }
}

export default (Navbar);
