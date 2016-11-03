import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.mainHead = this.mainHead.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.router.push('/splash');
    }
  }

  mainHead() {
    return (
      <div className="main-head">
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          { this.mainHead() }
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Home;
