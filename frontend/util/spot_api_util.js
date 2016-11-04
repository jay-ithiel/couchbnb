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

export const deleteSpot = (id, success, error) => {
  $.ajax ({
    method: ''
  });
};

// spot = {
//   host_id: 2,
//   host_name: "Host",
//   title: "Test Title",
//   country: "United States",
//   state_region: "California",
//   post_code: '94103',
//   street_address: '12345 Test Street',
//   price_per_night: '$300',
//   room_type: "Apartment",
//   bed_count: 4,
//   max_guests: 4,
//   spot_pic_url: 'https://www.google.com'
// };
