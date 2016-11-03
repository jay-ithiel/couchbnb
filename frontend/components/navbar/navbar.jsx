import React from 'react';
import { Link } from 'react-router';
// import Modal from 'react-modal';
// import ModalStyle from '../modal/modal_style';
import SessionFormContainer from '../session/session_form_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.loginLink = this.loginLink.bind(this);
    this.userWelcome = this.userWelcome.bind(this);
    this.logo = this.logo.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
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
      return (<div>you are logged in</div>);
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
        { this.loginLink() }
      </div>
    );
  }
}

export default (Navbar);
