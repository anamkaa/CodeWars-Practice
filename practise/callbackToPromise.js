//Write a JavaScript program that converts a callback-based function to a Promise-based function.

const cbFunc = (a, b, cb) => {
  const result = a + b;
  if (result % 2 == 0) {
    cb(null, result);
  } else {
    cb(new Error("Result is odd"), null);
  }
};

const prFunc = (a, b) => {
  return new Promise((resolve, reject) => {
    cbFunc(a, b, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(`Yayy ${result} is even`);
      }
    });
  });
};

prFunc(4, 8)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
