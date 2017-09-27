export const createReview = (review, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: {review},
    success,
    error
  });
};

export const fetchReviews = (success, errorr) => {
  $.ajax({
    method: "GET",
    url: "api/reviews",
    success,
    error
  });
};

export const updateReview = (review, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: {review},
    success,
    error
  });
};

export const deleteReview = (id, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${id}`,
    success,
    error
  });
};
