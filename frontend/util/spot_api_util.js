export const createSpot = (spot, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/spots',
    data: { spot },
    success,
    error
  });
};

export const updateSpot = (spot, success, error) => {
  $.ajax ({
    method: 'PATCH',
    url: `api/spots/${spot.id}`,
    data: { spot },
    success,
    error
  });
};

export const deleteSpot = (id, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/spots/${id}`,
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

export const fetchAllSpots = (filters, success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/spots',
    data: {bounds: filters.bounds},
    success,
    error
  });
};
