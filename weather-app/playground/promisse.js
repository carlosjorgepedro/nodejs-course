var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers.");
      }
    }, 1500);
  });
};

asyncAdd(4, "5")
  .then(value => asyncAdd(value, "10"))
  .then(value => console.log(`cool :${value}`)).catch((error)=>{
    console.error(`${error} failed!!!`);
  });

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey,  it worked!");
//   }, 2500);
// });

// somePromise.then(
//   value => console.log(value),
//   reason => console.log(`Failed, because ${reason}`)
// );
