const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather',
      string: true
    }
  })
  .help('help', 'h')
  .argv;

const address = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCofD4PiJ9XsSP8XIxY2D84YA5lZuFZ7ek`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Google service');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find address');
  } else {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Coordinates lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Coordinates lng: ${body.results[0].geometry.location.lng}`);
  }
});
