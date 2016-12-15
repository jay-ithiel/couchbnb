import React from 'react';
import { withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';
import UserInfoContainer from './user_info/user_info_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchLocation: ""
    };

    this.loginLink = this.loginLink.bind(this);
    this.logo = this.logo.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  logo() {
    return (
      <div className="logo" onClick={this.handleLogoClick}>
        <h1>Couchbnb</h1>
      </div>
    );
  }

  handleLogoClick() {
    this.props.router.push('/');
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

  handleSearchChange(e) {
    this.setState({
      searchLocation: e.target.value
    });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    let location = this.state.searchLocation.split(' ').join('+');
    this.props.requestLocation(location);
    this.props.router.push(`/search`);
  }

  searchBar() {
    return (
      <div className="nav-search-bar-container">
        <form className="nav-search-bar-form"
              onSubmit={ this.handleSearchSubmit } >
          <input
            type="text"
            name="search"
            value={this.state.searchLocation}
            onChange={this.handleSearchChange}
            className="nav-search-bar"
            placeholder="Where to?" />

          <button className="nav-search-button"></button>
        </form>
      </div>
    );
  }

  loginLink() {
    if (this.props.loggedIn) {
      return (
        <UserInfoContainer />
      );
    } else {
      return (
        <SessionFormContainer loginForm={true} />
      );
    }
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

export default withRouter(Navbar);
