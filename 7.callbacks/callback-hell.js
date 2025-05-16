// callback hell is also known as pyramid of doom
// callback hell is a situation where you have multiple nested callbacks

const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }

  const modifyFileData = data.toUpperCase();
  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.log("Error writing file", err);
      return;
    }
    console.log("File written successfully");

    fs.readFile("output.txt", "utf-8", (err, outputData) => {
      if (err) {
        console.log("Error reading file", err);
        return;
      }
      console.log(outputData);
    });
  });

});
