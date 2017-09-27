import {
  CREATE_REVIEW,
  REQUEST_REVIEWS,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  receiveReview,
  receiveReviews,
  removeReview,
} from '../actions/review_actions';

import {
  createReview,
  fetchReviews,
  updateReview,
  deleteReview,
} from '../util/review_api_util';

const ReviewsMiddleware = ({ getState, dispatch }) => next => action => {
  const reviewSuccess = review => dispatch(receiveReview(review));
  const reviewsSuccess = reviews => dispatch(receiveReviews(reviews));
  const reviewDeleteSuccess = id => dispatch(removeReview(id));
  const reviewError = errors => dispatch(receiveReviewErrors(errors.responseJSON));

  switch(action.type) {
    case CREATE_REVIEW:
      createReview(action.review, reviewSuccess, reviewError);
      return next(action);

    case REQUEST_REVIEWS:
      fetchReviews(reviewsSuccess, reviewError);
      return next(action);

    case UPDATE_REVIEW:
      updateReview(action.review, reviewSuccess, reviewError);
      return next(action);

    case DELETE_REVIEW:
      deleteReview(action.id, reviewDeleteSuccess, reviewError);
      return next(action);

    default:
      return next(action);
  };
};

export default ReviewsMiddleware;