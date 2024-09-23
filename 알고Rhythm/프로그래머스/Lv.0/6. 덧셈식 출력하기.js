const RL = require("readline");
const rl = RL.createInterface({
  input: process.stdin,
  output: process.stdout,
}).on("line", (answer) => {
  let input = [];
  input = answer.split(" ");
  console.log(
    `${Number(input[0])} + ${Number(input[1])} = ${
      Number(input[0]) + Number(input[1])
    }`
  );
});
