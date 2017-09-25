import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// Components
import Layout from '../layout/layout';
import SplashHead from './splash_head';
import BodyContainer from '../body/body_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) this.props.router.push('/');
  }

  render() {
    return this.props.loggedIn ? <div></div> : (
      <Layout>
        <SplashHead/>
        <BodyContainer/>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser
});

export default withRouter(
  connect(mapStateToProps, null)(Splash)
);
