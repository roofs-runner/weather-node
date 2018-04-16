const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather',
//       string: true
//     }
//   })
//   .help('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/0702426a777b9b4c85b8fd6fba7ecd80/37.8267-122.4233`,
  json: true
  }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('An error occured');
  }

  });
