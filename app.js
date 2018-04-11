const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5%20avenue%20new%20york&key=AIzaSyCofD4PiJ9XsSP8XIxY2D84YA5lZuFZ7ek',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});