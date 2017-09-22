import React from 'react';

// Components
import Layout from '../layout/layout';
import BodyContainer from '../body/body_container';
import { withRouter } from 'react-router';

const DatePicker = require('react-datepicker');
const moment = require('moment');

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchLocation: "",
      checkIn: moment(),
      checkOut: moment()
    };

    this.mainHead = this.mainHead.bind(this);
    this.banner = this.banner.bind(this);
    this.mainHeadSearchBorder = this.mainHeadSearchBorder.bind(this);
    this.mainHeadSearchContainer = this.mainHeadSearchContainer.bind(this);
    this.mainHeadSearchBar = this.mainHeadSearchBar.bind(this);
    this.mainHeadSearchDate = this.mainHeadSearchDate.bind(this);
    this.numGuests = this.numGuests.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
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

  handleSearchChange(e) {
    this.setState({
      searchLocation: e.target.value
    });
  }

  mainHeadSearchBar() {
    return (
      <div className="main-head-search-bar-container">
        <input
          type="text"
          value={this.state.searchLocation}
          onChange={this.handleSearchChange}
          className="main-head-search-bar"
          placeholder="Where to?"/>
      </div>
    );
  }

  handleCheckIn(date) {
    // will need to give spot model  functionality to filter spots index
    // where spot.open_dates > params[:check_in_date]
    //   and spot.opes_dates < params[:check_out_date]
    // for now, create temp internal state to handle Date change in UI
      // let dateUnix = date.unix();
      // this.props.updateCheckIn(dateUnix);
    this.setState({
      checkIn: date
    });
  }

  handleCheckOut(date) {
    this.setState({
      checkOut: date
    });
  }

  mainHeadSearchDate() {
    return (
      <div className="main-head-search-dates">
        <div className="main-head-search-date">
          <DatePicker
            selected={this.state.checkIn}
            onChange={this.handleCheckIn} />
        </div>

        <div className="main-head-search-date">
          <DatePicker
            selected={this.state.checkOut}
            onChange={this.handleCheckOut}/>
        </div>
      </div>
    );
  }

  numGuests() {
    return (
      <div className="num-guests-container">
        <select className="" onChange={this.handleNumGuests}>
          <option value="" disabled selected>Num Guests</option>
          <option value="1">1 guest</option>
          <option value='2'>2 guests</option>
          <option value='3'>3 guests</option>
          <option value='4'>4 guests</option>
          <option value='5'>5 guests</option>
          <option value='6'>6 guests</option>
          <option value='7'>7 guests</option>
          <option value='8'>8 guests</option>
          <option value='9'>9 guests</option>
          <option value='10+'>10+ guests</option>
        </select>
      </div>
    );
  }

  handleSearch(e) {
    e.preventDefault();
    let location = this.state.searchLocation.split(' ').join('+');
    this.props.requestLocation(location);
    this.props.router.push(`/search`);
  }

  searchButton() {
    return (
      <div className="main-head-search-button" onClick={this.handleSearch} >
        Search
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Layout>
          { this.mainHead() }
          <BodyContainer />
        </Layout>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default withRouter(Home);
