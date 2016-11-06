import React from 'react';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);

    this.image = this.image.bind(this);
    this.info = this.info.bind(this);
  }

  image() {
    return (
      <div className="search-result-item-image">

      </div>
    );
  }

  info() {
    return (
      <div className="search-result-item-info">

      </div>
    );
  }

  render() {
    return (
      <div className="search-result-item">
        {this.image()}
        {this.info()}
      </div>
    );
  }
}

export default SearchResultItem;
