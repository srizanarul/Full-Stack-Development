const read = require("readline");
const rl = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is Your Name?", (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});
