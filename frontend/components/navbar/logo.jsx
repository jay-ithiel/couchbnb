import React from 'react';
import { Link } from 'react-router';

const Logo = () => (
  <Link className="logo" to={'/'}>
    <h1>Couchbnb</h1>
  </Link>
);

export default Logo;
