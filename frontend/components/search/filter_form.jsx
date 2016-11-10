// import React from 'react';
//
// class FilterForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       minPrice: this.props.minPrice,
//       maxPrice: this.props.maxPrice
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(filter, updateFilter) {
//     return e => {
//       updateFilter(filter, e.target.value);
//     };
//   }
//
//   render() {
//     return (
//       <div className="filter-form">
//         <form>
//           <input
//             type="number"
//             value={this.props.minPrice}
//             onChange={this.handleChange('minPrice', this.props.updateFilter)} />
//           <input
//             type="number"
//             value={this.props.maxPrice}
//             onChange={this.handleChange('maxPrice', this.props.updateFilter)} />
//         </form>
//       </div>
//     );
//   }
// }
//
// export default FilterForm;


const React = require('react');

const handleChange = (filter, updateFilter) => (
  e => {
    updateFilter(filter, e.currentTarget.value);
  }
);

const FilterForm = ({ minPrice, maxPrice, updateFilter, updateMinPrice, updateMaxPrice }) => {
  if (minPrice === undefined || maxPrice === undefined) {
    

    return (
      <div>its broeciaehtn ohusoucnhts</div>
    );
  }

  return (
    <div>
      <span className="filter">Filter results:</span>
      <br/>
      <label>Minimum Price</label>
      <input
        type="number"
        value={minPrice}
        onChange={handleChange('minPrice', updateFilter)}/>
       <br/>
      <label>Maximum Price</label>
      <input
        type="number"
        value={maxPrice}
        onChange={handleChange('maxPrice', updateFilter)}/>
    </div>
  );
};

export default FilterForm;
