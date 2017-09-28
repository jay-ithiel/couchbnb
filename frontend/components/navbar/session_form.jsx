import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';

// Components
import Modal from 'react-modal';
import ModalStyle from '../modal/modal_style';

// Actions
import { login, signup } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // closeModal() {
  //   this.setState({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     password: "",
  //     modalOpen: false
  //   });
  // }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.isLoginForm) {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  render() {
    const errors = this.props.errors;
    let errorsLi;
    if (errors) errorsLi = errors.map((error, i) => <li key={i}>{error}</li> );

    const formHeader = this.props.isLoginForm ? "Log In" : "Sign Up";
    const otherQuestion = this.props.isLoginForm ? "Not a Member yet?" : "Already a Member?";
    const otherSession = this.props.isLoginForm ? "Sign Up" : "Log In";

    return (
      <div className="modal">
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.toggleModal}
          style={ModalStyle}
        >
          <form id='sessionForm' onSubmit={this.handleSubmit.bind(this)}>
            <div className="session-form-header">
              <h2 className="session-form-type">{formHeader}</h2>
            </div>

            <ul className="errors">{errorsLi}</ul>

            {
              this.props.isLoginForm ? <div></div> : (
                <div className="name-input-fields">
                  <input
                    type="text"
                    value={this.state.first_name}
                    onChange={this.handleChange('first_name')}
                    placeholder="First Name"
                    className="input"
                  />

                  <input
                    type="text"
                    value={this.state.last_name}
                    onChange={this.handleChange('last_name')}
                    placeholder="Last Name"
                    className="input"
                  />
                </div>
              )
            }

            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
              placeholder="Email"
              className="input"
            />

            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              placeholder="Password"
              className="input"
            />

            <button className="form-submit session-form-btn">
              {formHeader}
            </button>

            <div
              className="form-guest-login session-form-btn" onClick={this.props.guestLogin}
            >
              Guest Login
            </div>

            <div className="toggle-form">
              <p>
                {otherQuestion}
                <span className="toggle-session" onClick={this.props.toggleModalContent}>
                  {otherSession}!
                </span>
              </p>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors || []
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  guestLogin: () => dispatch(login(({
    user: {
      email: "guest@gmail.com",
      password: "password",
    }
  }))),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
