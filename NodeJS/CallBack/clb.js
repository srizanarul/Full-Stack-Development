const fs = require("fs");
// Asynchronous file reading
fs.readFile("data.txt", "utf8", function (err, data) {
  if (err) {
    console.error("Error reading the file:", err.message);
  } else {
    console.log("File contents:\n", data);
  }
});
