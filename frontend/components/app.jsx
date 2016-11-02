import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <h1>Couchbnb</h1>
    <p>Hello from the app component</p>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
