import React from 'react';

const Review = ({ review }) => (
  <li id='review'>
    <span>{review.rating}</span>
    <p>{review.body}</p>
  </li>
);

export default Review;
