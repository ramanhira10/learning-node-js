function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));

}

console.log("Promise lecture starts");

delayFn(2000).then(() => console.log("after 2 seconds promise resolved"));

console.log("Promise lecture ends");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 5).then((result) => {
  console.log("Result:", result);
}).catch((error) => {
  console.error("Error:", error);
});
