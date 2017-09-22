import React from 'react';

// Components
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Layout = ({ children }) => (
  <div id="Layout">
    <Navbar/>
    <div id="Layout-content">
      {children}
    </div>
    <Footer/>
  </div>
);

export default Layout;
