import React from 'react';

// Components
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Layout = ({ children, isSearchPage }) => (
  <div id="Layout">
    <Navbar isSearchPage={isSearchPage}/>
    <div id="Layout-content">
      {children}
    </div>
    <Footer/>
  </div>
);

export default Layout;
