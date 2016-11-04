export const createSpot = (spot, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/spots',
    data: {spot},
    success,
    error
  });
};

export const fetchSpot = (id, success, error) => {
  $.ajax ({
    method: 'GET',
    url: `api/spots/${id}`,
    success,
    error
  });
};

export const fetchAllSpots = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/spots',
    success,
    error
  });
};
