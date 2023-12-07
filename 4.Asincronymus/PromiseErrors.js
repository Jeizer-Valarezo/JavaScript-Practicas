const isLogged = true;

const promise1 = new Promise((resolve, reject) => {
  if (isLogged) {
    resolve(Math.random());
  } else {
    reject(new Error("User is not logged in"));
  }
});

const promise2 = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Number is less than or equal to 0.5"));
    }
  });
};

promise1
  .then((result) => {
    console.log(result);
    return promise2(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
    throw new Error("Error occurred while executing the promise chain");
  })
  .finally(() => {
    console.log("Promise chain execution completed");
  });
