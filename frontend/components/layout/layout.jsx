import React from 'react';

// Components
import Navbar from './navbar/navbar';
import Footer from '../footer/footer';

export default const Layout = ({ children }) => (
  <div id="Layout">
    <Navbar/>
    <div id="Layout-content">
      {children}
    </div>
  </div>
);
