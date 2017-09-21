import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../modal/modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      modalOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleSession = this.toggleSession.bind(this);

    this.loginModal = this.loginModal.bind(this);
    this.signupModal = this.signupModal.bind(this);
    this.loginForm = this.props.loginForm;
  }

  modal() {
    return (
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={ModalStyle}
      >
        <SessionFormContainer loginForm={this.state.login}/>
      </Modal>
    );
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      modalOpen: false
    });
  }

  toggleSession() {
    this.closeModal();
    this.loginForm = this.loginForm ? false : true;
    this.openModal();
  }

  loginModal() {
    return (
      <div className="header-login" onClick={this.openModal}>
        <p>Log In</p>
      </div>
    );
  }

  signupModal() {
    return (
      <div className="signup" onClick={this.openModal}>
        <p>Sign Up</p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user }, this.loginForm);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const errors = this.props.errors;
    let errorsLi;
    if (errors) {
      errorsLi = errors.map((error, i) => (
        <li key={i}>{error}</li>
      ));
    }

    const nameInputFields = () => {
      return(
        <div className="name-input-fields">
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.handleChange('first_name')}
            placeholder="First Name"
            className="input" />

          <input
            type="text"
            value={this.state.last_name}
            onChange={this.handleChange('last_name')}
            placeholder="Last Name"
            className="input" />
        </div>
      );
    };

    const toggleForm = this.loginForm === false ? "Log In" : "Sign Up";
    const formHeader = this.loginForm === true ? "Log In" : "Sign Up";

    const otherQuestion = this.loginForm ? "Not a Member yet?" : "Already a Member?";
    const otherSession = this.loginForm ? "Sign Up" : "Log In";

    return(
      <div className="modal">
        { this.props.loginForm === false ? this.signupModal() : this.loginModal() }

        <Modal isOpen={this.state.modalOpen}
               onRequestClose={this.closeModal}
               style={ModalStyle}>
          <div>

            <form onSubmit={this.handleSubmit}>
              <div className="session-form-header">
                <h2 className="session-form-type">{formHeader}</h2>
              </div>

              <ul className="errors">
                { errorsLi }
              </ul>

              { this.loginForm === false ? nameInputFields() : ""}

              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder="Email"
                className="input" />

              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder="Password"
                className="input" />

              <button className="form-submit">{formHeader}</button>
              <div className="form-guest-login"
                   onClick={this.props.guestLogin}>
                <p>Guest Login</p>
              </div>

              <div className="toggle-form">
                <p>
                  {otherQuestion}
                  <div
                    className="toggle-session"
                    onClick={this.toggleSession}>{otherSession}!
                  </div>
                </p>
              </div>
            </form>

          </div>
        </Modal>

      </div>
    );
  }
}

export default withRouter(SessionForm);
