import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash';

class App extends React.Component {
  constructor(props){
    super(props);
    this.children = props.children;
  }

  render() {
    return(
      <div>
        <NavbarContainer />
        <Splash />
        {this.children}
      </div>
    );
  }
}


export default App;
