// callbacks are functions that are passed to other functions as arguments
// they are used to handle asynchronous operations
// they are also used to handle events
// they are used to handle errors
// they are used to handle success
// they are used to handle failure
// they are used to handle completion
// they are used to handle progress
// they are used to handle cancellation
// they are used to handle timeouts



const fs = require("fs");

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();

}

function address() {
  console.log("address");
}

person("Raman", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }

  console.log(data);

});