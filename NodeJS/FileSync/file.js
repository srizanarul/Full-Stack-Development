const fs = require("fs");
try {
  const data = fs.readFileSync("data.txt", "utf8");
  console.log("File contents:\n", data);
} catch (err) {
  console.error("Error reading the file:", err.message);
}
