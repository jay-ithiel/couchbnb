import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div>
    <Link to='/signup'>Sign Up</Link>
    <Link to='/login'>Log In</Link>
  </div>
);

const userWelcome = (currentUser, logout) => {
  return(
    <div>
      <h2>Welcome {currentUser.first_name}</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

const Greeting = (props) => {
  if (props.currentUser) {
    return userWelcome(props.currentUser, props.logout);
  } else {
    return sessionLinks();
  }
};

export default Greeting;
