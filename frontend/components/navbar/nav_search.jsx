import React from 'react';
import { withRouter } from 'react-router';

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchLocation: "" };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ searchLocation: e.target.value });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    let location = this.state.searchLocation.split(' ').join('+');
    this.props.requestLocation(location);
    this.props.router.push(`/search`);
  }

  render() {
    return (
      <div className="nav-search-bar-container">
        <form className="nav-search-bar-form" onSubmit={this.handleSearchSubmit} >
          <input
            type="text"
            name="search"
            value={this.state.searchLocation}
            onChange={this.handleSearchChange}
            className="nav-search-bar"
            placeholder="Where to?"
          />
          <button className="nav-search-button"></button>
        </form>
      </div>
    );
  }
}

export default withRouter(NavSearch);
