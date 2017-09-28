import { merge } from 'lodash';
import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
} from '../actions/review_actions';

const _defaultState = {
  index: {},
  errors: [],
};

const ReviewsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_REVIEW:
      newState.index[action.review.id] = action.review;
      newState.errors = [];
      return newState;

    case RECEIVE_REVIEWS:
      newState.index = action.reviews;
      newState.errors = [];
      return newState;

    case REMOVE_REVIEW:
      delete newState.index[action.id];
      newState.errors = [];
      return newState;

    case RECEIVE_REVIEW_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default ReviewsReducer;
