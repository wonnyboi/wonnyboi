const RL = require("readline");
const rl = RL.createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (answer) => {
  [a, b] = answer.split(" ");
  console.log(`${a}${b}`);
});
