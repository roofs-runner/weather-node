const request = require('request');

const geocodeAddress = (addressArg, callback) => {
  const address = encodeURIComponent(addressArg.address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCofD4PiJ9XsSP8XIxY2D84YA5lZuFZ7ek`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Google service');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find address');
    } else {
      callback(undefined, {
        address: body.results[0].formatted_address
      });
      callback(undefined, {
        lat: body.results[0].geometry.location.lat
      });
      callback(undefined, {
        long: body.results[0].geometry.location.lng
      })
    }
  });
}

module.exports = {
  geocodeAddress: geocodeAddress
}
