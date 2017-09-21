import React from 'react';

// Components
import SessionFormContainer from '../session/session_form_container';

const SplashHead = ({ guestLogin }) => {
  return (
    <div className="main-pic">
      <h2 className="banner">Stay with Locals and Travel the World</h2>

      <div className="session-links">
        <div className="guest-login" onClick={guestLogin}>
          <p>Guest Login</p>
        </div>
        
        <SessionFormContainer loginForm={false} />
      </div>
    </div>
  );
}

export default SplashHead;
