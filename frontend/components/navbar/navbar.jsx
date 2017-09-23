import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';

// Components
import Logo from './logo';
import NavSearch from './nav_search';
import NavMenu from './nav_menu';

// Actions
import { requestLocation } from '../../actions/filter_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      login: false
    };
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

  render() {
    return(
      <div className="navbar">
        <Logo/>
        {
          !this.props.isSearchPage ? <div></div> : (
            <NavSearch
              isSearchPage={true}
              requestLocation={this.props.requestLocation}
            />
          )
        }
        <NavMenu loggedIn={this.props.loggedIn}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, routerProps) => ({
  logout: () => dispatch(logout()),
  requestLocation: location => dispatch(requestLocation(location))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navbar)
);
