import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.mainHead = this.mainHead.bind(this);
  }

  mainHead() {
    return (
      <div className="main-head">
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.mainHead() }
      </div>
    );
  }
}

export default Home;
