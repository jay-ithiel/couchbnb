import React from 'react';

// Components
import SessionFormContainer from '../session/session_form_container';
import UserInfoContainer from './user_info/user_info_container';

const NavMenu = props => {
  return props.loggedIn ? <UserInfoContainer /> : (
    <SessionFormContainer loginForm={true} />
  );
};

export default NavMenu;
