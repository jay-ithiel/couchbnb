export const fetchLocation = (location, success) => {
  $.ajax ({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBDm-uAWZjK-h7w-tf0euzdr_lH9n3bkr8`,
    data: location,
    success
  });
};
