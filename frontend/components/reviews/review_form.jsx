import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  createReview,
  updateReview,
} from '../../actions/review_actions';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guest_id: props.loggedIn ? props.currentUser.id : null,
      spot_id: props.spot.id,
      title: "",
      body: "",
      rating: null,
      errors: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.reviewErrors });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.guest_id) {
      this.setState({ errors: ["You must be logged in to write a review"] })
    } else {
      this.props.createReview(this.state);
    }
  }

  render() {
    let errors = this.state.errors, errorsLi;
    if (errors) errorsLi = errors.map((error, i) => <li key={i}>{error}</li> )

    return (
      <form id='ReviewForm' onSubmit={this.handleSubmit.bind(this)}>
        <h3 id='ReviewForm-title'>Write a Review</h3>

        <select id='ReviewForm-rating' className='ReviewForm-input' onChange={this.handleChange("rating")}>
          <option defaultValue value="">Please select an option</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>

        <textarea
          id='ReviewForm-body'
          className='ReviewForm-input'
          value={this.state.body}
          onChange={this.handleChange("body")}
          placeholder={"Write your review here.."}
        />

        <button id='ReviewForm-submit'>Submit Review</button>
        <ul className="errors">{errorsLi}</ul>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  currentUser: state.session.currentUser,
  reviewErrors: state.reviews.errors,
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
