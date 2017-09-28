import React from 'react';
import { connect } from 'react-redux';

const Review = props => {
  const review = props.review;
  if (Object.keys(props.reviews).length === 0) return <div></div>;
  const guest = props.reviews[review.id].guest;

  return (
    <li id='review'>
      <div id='Review-authorInfo'>
        <div id='Review-authorInfo--image'
          style={{ backgroundImage: `url(${guest.profile_pic_url})` }}>
        </div>
        <h4 id='Review-authorInfo--name'>
          {guest.first_name} {guest.last_name}
        </h4>
      </div>

      <span>{review.rating}</span>
      <p>{review.body}</p>
    </li>
  );
}

const mapStateToProps = state => ({
  reviews: state.reviews.index,
});

export default connect(mapStateToProps, null)(Review);
