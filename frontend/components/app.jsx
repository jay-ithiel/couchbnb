import React from 'react';
import NavbarNew from './navbar/navbar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.children = props.children;
  }

  render() {
    return(
      <div>
        <NavbarNew/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
