import React from 'react';

// Components
import UserInfoContainer from './user_info/user_info_container';
import SessionFormNew from '../session/session_form';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
      isLoginForm: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModalContent() {
    this.setState({ isLoginForm: !this.state.isLoginForm });
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  showSignIn() {
    this.setState({ isLoginForm: true });
    this.toggleModal();
  }

  showSignUp() {
    this.setState({ isLoginForm: false });
    this.toggleModal();
  }

  render() {
    return this.props.loggedIn ? <UserInfoContainer/> : (
      <ul id="NavMenu-sessionLinks">
        <li className="session-link" onClick={this.showSignIn.bind(this)}>
          <span>Sign In</span>
        </li>

        <li className="session-link" onClick={this.showSignUp.bind(this)}>
          <span>Sign Up</span>
        </li>
        <SessionFormNew
          isOpen={this.state.isOpen}
          isLoginForm={this.state.isLoginForm}
          toggleModalContent={this.toggleModalContent.bind(this)}
          toggleModal={this.toggleModal}
        />
      </ul>
    );
  }
}
