import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter, updateFilter) {
    return e => updateFilter(filter, e.currentTarget.value);
  }

  render() {
    return (
      <div className="filter-form">
        <form>
          <input
            type="number"
            value={this.props.minPrice}
            onChange={this.handleChange('minPrice', this.props.updateFilter)} />
          <input
            type="number"
            value={this.props.maxPrice}
            onChange={this.handleChange('maxPrice', this.props.updateFilter)} />
        </form>
      </div>
    );
  }
}

// const handleChange = (filter, updateFilter) => (
//   e => updateFilter(filter, e.currentTarget.value)
// );
//
// const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
//   <div className="filter-form">
//     <input
//       type="number"
//       value={minPrice}
//       onChange={handleChange('minPrice', updateFilter)} />
//     <input
//       type="number"
//       value={maxPrice}
//       onChange={handleChange('maxPrice', updateFilter)} />
//   </div>
// );

export default FilterForm;
