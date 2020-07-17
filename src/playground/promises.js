//promises are way to sync Async operations

const promise = new Promise((resolve, reject) => {
    resolve('this is my resolved data');
    //reject('something went wrong');
});

//when resolved is called then is fired
// when reject is called catch is fired
//we can either resolve or reject a promise only once in any given promise
//if catch param is not defined reject raises a js error
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
});


//we can also pass catch method as second param for then

// promise.then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error)
// });