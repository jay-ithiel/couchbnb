import React from 'react';
import { connect } from 'react-redux';

// Components
import Review from './review';

// Actions
import { requestReviews } from '../../actions/review_actions';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: {} };
  }

  mapReviewLis() {
    return this.props.spot.reviews.map((review, idx) => (
      <Review review={review}/>
    ));
  }

  render() {
    const reviewLis = this.mapReviewLis.bind(this)();
    return (
      <ul id='reviews'>
        {reviewLis}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.index,
});

const mapDispatchToProps = dispatch => ({
  requestReviews: () => dispatch(requestReviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
