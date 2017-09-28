export const CREATE_REVIEW = "CREATE_REVIEW";
export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const REQUEST_REVIEWS = "REQUEST_REVIEWS";
export const requestReviews = (spotId) => ({
  type: REQUEST_REVIEWS,
  spotId
});

export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const updateReview = review => ({
  type: UPDATE_REVIEW,
  review
});

export const DELETE_REVIEW = "DELETE_REVIEW";
export const deleteReview = id => ({
  type: DELETE_REVIEW,
  id
});

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const removeReview = id => ({
  type: REMOVE_REVIEW,
  id
});

export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});
