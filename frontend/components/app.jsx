import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.children = props.children;
  }

  render() {
    return(
      <div>
        <NavbarContainer />

        {this.props.children}
      </div>
    );
  }
}

export default App;
