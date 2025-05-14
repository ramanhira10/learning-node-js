// module.exports

// require

const firstModule = require("./first-module");

console.log(firstModule.add(10, 20));

try {

  console.log("tyring to divide by zero");
  let result = firstModule.divide(0, 0);
  console.log(result);

} catch (err) {
  console.log('caught an error', err);
}

// module wrapper

// (
//   function (exports, require, module, __filename, __dirname) {

//     // your module code goes here
//   }
// )


