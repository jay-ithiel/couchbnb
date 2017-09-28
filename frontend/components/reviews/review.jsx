import React from 'react';
import { connect } from 'react-redux';
import { _parseDate } from '../../util/helper_methods';

const Review = props => {
  if (Object.keys(props.reviews).length === 0) return <div></div>;

  const review = props.review;
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

export default connect(mapStateToProps, null)(Review);
