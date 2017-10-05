import React from 'react';

// Components
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Layout = ({ children, isSearchPage }) => {
  return isSearchPage ? (
    <div id="Layout">
      <Navbar isSearchPage={isSearchPage}/>
      <section id="Layout-content">{children}</section>
    </div>
  ) : (
    <div id="Layout">
      <Navbar isSearchPage={isSearchPage}/>
      <section id="Layout-content">{children}</section>
      <Footer/>
    </div>
  );
}

export default Layout;
