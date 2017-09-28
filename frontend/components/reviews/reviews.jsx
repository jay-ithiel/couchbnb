import React from 'react';
import { connect } from 'react-redux';

// Components
import Review from './review';
import ReactStars from 'react-stars';

// Actions
import { requestReviews } from '../../actions/review_actions';

class Reviews extends React.Component {
  componentDidMount() {
    this.props.requestReviews();
  }

  mapReviewLis() {
    return this.props.spot.reviews.map((review, idx) => (
      <Review review={review} key={idx}/>
    ));
  }

  averageRating() {
    const reviews = this.props.spot.reviews;
    let sum = 0;
    reviews.forEach(review => sum += review.rating );
    return sum / reviews.length;
  }

  render() {
    const reviewLis = this.mapReviewLis.bind(this)();
    const averageRating = this.averageRating.bind(this)();
    const reviewsCount = this.props.spot.reviews.length;

    return (
      <div id='Reviews'>
        <section id='Reviews-head'>
          <h4>{reviewsCount} Reviews</h4>
          <ReactStars
            count={5}
            value={averageRating}
            size={19}
            color1={'#bbbbbb'}
            color2={'#008489'}
            edit={false}
          />
        </section>

        <ul id='Reviews-ul'>
          {reviewLis}
        </ul>
      </div>
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
