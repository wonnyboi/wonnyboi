const RL = require("readline");
const rl = RL.createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (answer) => {
  input = [answer];
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
});
