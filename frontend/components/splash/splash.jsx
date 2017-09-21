import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// Components
// import SessionFormContainer from '../session/session_form_container';
import SplashHead from './splash_head';
import BodyContainer from '../body/body_container';
import Footer from '../footer/footer';

// Actions
import {
  logout,
  login,
  signup
} from '../../actions/session_actions';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) this.props.router.push('/');
  }

  render() {
    return this.props.loggedIn ? <div></div> : (
      <div>
        <SplashHead guestLogin={this.props.guestLogin}/>
        <BodyContainer/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  signup: () => dispatch(signup()),
  login: () => dispatch(login()),
  guestLogin: () => dispatch(login({
    user: {
      email: "guest@gmail.com",
      password: "password"
    }
  }))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Splash)
);
