import React from 'react';

// Components
import Layout from '../layout/layout';
import SplashHead from './splash_head';
import SplashBody from './splash_body';

const Splash = () => (
  <Layout id='splash'>
    <SplashHead/>
    <SplashBody/>
  </Layout>
);

export default Splash;
