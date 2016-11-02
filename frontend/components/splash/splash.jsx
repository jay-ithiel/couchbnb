import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.backgroundImage = this.backgroundImage.bind(this);
  }

  backgroundImage() {
    return (
      <div className="main-pic">
        <img
          className="nyc-skyline"
          src="https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg"
          alt="New York City">
        </img>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.backgroundImage() }
      </div>
    );
  }
}

export default Splash;
