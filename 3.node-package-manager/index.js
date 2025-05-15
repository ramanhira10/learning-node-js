const lodash = require("lodash");

const names = ["Sangam", "Hitesh", "Piyush", "John", "Terry", "Alex"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
