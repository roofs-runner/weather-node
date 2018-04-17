const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Arguments must be numbers!');
    }
  });
};

asyncAdd(5,7).then((result) => {
  console.log(`Result: ${result}`);
}, (errorMessage) => {
  console.log(errorMessage);
});

// const somePromise = new Promise((resolve, reject) => {
//   // resolve('Hey, it worked!');
//   reject('Just fuck off, OK?');
// });
//
// somePromise.then((message) => {
//   console.log(`Success: ${message}`)
// }, (errorMessage) => {
//   console.log(`Error: ${errorMessage}`);
// });
