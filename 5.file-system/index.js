const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
// synchronous way of creating the file

fs.writeFileSync(filePath, "Hello from node js");

console.log("File created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content: ", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is a new line added to that file");
console.log("new conent added to this file");

// async way of creating file/folder

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, async node js", (err) => {
  if (err) {
    throw err;
  }

  console.log("async file is created successfully");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    fs.readFile(asyncFilePath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      console.log("async file content: ", data);

      fs.appendFile(asyncFilePath, "\nThis is another line", (err) => {
        if (err) {
          throw err;
        }
        console.log("New line added to async file");

        fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
          if (err) {
            throw err;
          }

          console.log("Updated file content: ", updatedData);

        });

      });

    });
  });

});

