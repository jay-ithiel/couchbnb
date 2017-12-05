import React from 'react';
import { Link } from 'react-router';

const Logo = () => (
  <Link id="logo" to={'/'}>
    <img id="logo-img" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1506400759/couchbnb_icon_tet7cj.png"/>
    <h1>Couchbnb</h1>
  </Link>
);

export default Logo;

// https://res.cloudinary.com/ddgtwtbre/image/upload/v1512496336/couchbnb_logo_zycffe.png
