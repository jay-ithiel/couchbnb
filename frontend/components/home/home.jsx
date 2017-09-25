import React from 'react';
import { withRouter } from 'react-router';

// Components
import Layout from '../layout/layout';
import SplashHead from '../splash/splash_head';
import BodyContainer from '../body/body_container';

class Home extends React.Component {
  componentDidUpdate() {
    if (!this.props.loggedIn) this.props.router.push('/splash');
  }

  render() {
    return !this.props.loggedIn ? <div></div> : (
      <Layout>
        <SplashHead/>
        <BodyContainer/>
      </Layout>
    );
  }
}

export default withRouter(Home);
