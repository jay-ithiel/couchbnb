import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
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
        <div>
          <label>First Name
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.handleChange('first_name')}
            />
          </label>

          <label>Last Name
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.handleChange('last_name')}
            />
          </label>
        </div>
      );
    };

    const toggleForm = this.props.loginForm === false ? "Log In" : "Sign Up";
    const formHeader = this.props.loginForm === true ? "Log In" : "Sign Up";

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="session-form-header">
            <h2 className="session-form-type">{formHeader}</h2>
          </div>


          <ul>
            {errorsLi}
          </ul>

          { this.props.loginForm === "Sign Up" ? nameInputFields() : ""}

          <label className="input">
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
              placeholder="Email"
            />
          </label>

          <label className="input">
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              placeholder="Password"
            />
          </label>

          <button className="form-submit">{formHeader}</button>

          <div className="toggle-form">
            <p>
              Not a member yet? <Link to={toggleForm}>{toggleForm}</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
