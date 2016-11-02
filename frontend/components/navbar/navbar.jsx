import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../modal/modal_style';
import SessionFormContainer from '../session/session_form_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.loginLink = this.loginLink.bind(this);
    this.userWelcome = this.userWelcome.bind(this);
    this.logo = this.logo.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);

    this.state = {
      modalOpen: false,
      signIn: false
    };
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  modal() {
    return (
      <Modal isOpen={this.state.modalOpen}
             onRequestClose={this.closeModal}
             style={ModalStyle}>
          {<SessionFormContainer type={this.state.signIn}/>}
      </Modal>
    );
  }

  handleClickLogin() {
    this.setState({
      modalOpen: true,
      signIn: true
    });
  }

  handleClickSignup() {
    this.setState({
      modalOpen: true,
      signIn: false
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
    return (
      <div className="header-login">
        <div onClick={this.handleClickLogin}>
          <p>Log In</p>
        </div>

        <div className="modal">
          { this.modal() }
        </div>
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
