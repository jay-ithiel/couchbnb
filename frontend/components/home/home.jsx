import React from 'react';
import Body from '../body/body';
import Footer from '../footer/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.mainHead = this.mainHead.bind(this);
    this.banner = this.banner.bind(this);
    this.mainHeadSearchBorder = this.mainHeadSearchBorder.bind(this);
    this.mainHeadSearchContainer = this.mainHeadSearchContainer.bind(this);
    this.mainHeadSearchBar = this.mainHeadSearchBar.bind(this);
    this.mainHeadSearchDate = this.mainHeadSearchDate.bind(this);
    this.numGuests = this.numGuests.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.router.push('/splash');
    }
  }

  banner() {
    return (
      <h2 className="banner">Go Anywhere</h2>
    );
  }

  mainHead() {
    return (
      <div className="main-head">
        <div className="placeholder"></div>
        { this.banner() }
        { this.mainHeadSearchBorder() }
      </div>
    );
  }

  mainHeadSearchBorder() {
    return (
      <div className="main-head-search-border">
        { this.mainHeadSearchContainer() }
      </div>
    );
  }

  mainHeadSearchContainer() {
    return (
      <div className="main-head-search-container">
        { this.mainHeadSearchBar() }
        { this.mainHeadSearchDate() }
        { this.numGuests() }
        { this.searchButton() }
      </div>
    );
  }

  mainHeadSearchBar() {
    return (
      <div className="main-head-search-bar-container">
        <input
          type="text"
          className="main-head-search-bar"
          placeholder="Where to?"/>
      </div>
    );
  }

  mainHeadSearchDate() {
    return (
      <div className="main-head-search-dates">
        <input
          type="text"
          className="main-head-search-date"
          placeholder="Start Date" />
        <input
          type="text"
          className="main-head-search-date"
          placeholder="End Date"/>
      </div>
    );
  }

  numGuests() {
    return (
      <div className="num-guests-container">
        <input
          type="text"
          className="num-guests"
          placeholder="2 Guests"/>
      </div>
    );
  }

  handleSearch() {
    alert('You clicked search! Too bad I don\'t know how to search.');
  }

  searchButton() {
    return (
      <div className="main-head-search-button"
           onClick={this.handleSearch} >
        Search
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          { this.mainHead() }
          <Body />
          <Footer />
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
