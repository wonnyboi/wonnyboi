const RL = require("readline");
const rl = RL.createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (answer) => {
  n = Number(answer);
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
});
