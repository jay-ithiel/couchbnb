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

    const toggleForm = this.props.formType === "Log in" ? "/signup" : "/login";
    const toggleFormType = this.props.formType === "Log in" ? "Sign Up" : "Log in";

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>{this.props.formType}</h2>
          <Link to={toggleForm}>{toggleFormType}</Link>
          <ul>
            {errorsLi}
          </ul>

          { this.props.formType === "Sign Up" ? nameInputFields() : ""}

          <label>Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </label>

          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>

          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
