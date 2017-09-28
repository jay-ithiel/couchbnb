import React from 'react';
import { connect } from 'react-redux';

// Components
import ReactStars from 'react-stars';

// Helper Methods
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

      {/*
        <ReactStars
          count={5}
          value={review.rating}
          size={24}
          color2={'#ffd700'}
          edit={false}
        />
      */}

      <p>{review.body}</p>
    </li>
  );
}

const mapStateToProps = state => ({
  reviews: state.reviews.index,
});

export default connect(mapStateToProps, null)(Review);
