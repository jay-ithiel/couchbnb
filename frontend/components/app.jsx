import React from 'react';
import NavbarNew from './navbar/navbar';
import SplashContainer from './splash/splash_container';


class App extends React.Component {
  constructor(props){
    super(props);
    this.children = props.children;
  }

  render() {
    // <NavbarContainer />
    return(
      <div>
        <NavbarNew/>

        {this.props.children}
      </div>
    );
  }
}

export default App;
