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
    let searchButtonContent, klassName, btnKlassName;

    if (this.props.isSearchPage) {
      searchButtonContent = '';
      btnKlassName = 'nav-search-button';
      klassName = 'nav-search-bar-container';
    } else {
      searchButtonContent = 'Search';
      btnKlassName = 'splash-search-button';
      klassName='splash-search-bar-container';
    }

    return (
      <div className={klassName}>
        <form className="nav-search-bar-form" onSubmit={this.handleSearchSubmit} >
          <input
            type="text"
            name="search"
            value={this.state.searchLocation}
            onChange={this.handleSearchChange}
            className="nav-search-bar"
            placeholder="Try 'San Francisco'"
          />
          <button className={btnKlassName}>
            {searchButtonContent}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NavSearch);
