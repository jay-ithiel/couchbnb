import React from 'react';
import { connect } from 'react-redux';

// Actions
import { requestReviews } from '../../actions/review_actions';

// Helper Methods
import { _parseDate } from '../../util/helper_methods';

const Review = props => {
  const review = props.review;

  if (Object.keys(props.reviews).length === 0) return <div></div>;
  if (!props.reviews[review.id]) return <div></div>;

  const guest = props.reviews[review.id].guest;

  return (
    <li id='Review'>
      <div id='Review-authorInfo'>
        <div id='Review-authorInfo--image'
          style={{ backgroundImage: `url(${guest.profile_pic_url})` }}>
        </div>

        <div>
          <h4 id='Review-authorInfo--name'>{guest.first_name}</h4>
          <span id='Review-authorInfo--createdAt'>
            {_parseDate(review.created_at)}
          </span>
        </div>
      </div>

      <p>{review.body}</p>
    </li>
  );
}

const mapStateToProps = state => ({
  reviews: state.reviews.index,
});

const mapDispatchToProps = dispatch => ({
  requestReviews: spotId => dispatch(requestReviews(spotId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
