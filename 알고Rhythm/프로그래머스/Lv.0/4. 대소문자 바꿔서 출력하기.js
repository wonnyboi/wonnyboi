const RL = require("readline");
let input = "";

const rl = RL.createInterface({
  input: process.stdin,
  output: process.stdout,
})
  .on("line", (answer) => {
    input = answer;
  })
  .on("close", () => {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === input[i].toUpperCase()) {
        arr.push(input[i].toLowerCase());
      } else {
        arr.push(input[i].toUpperCase());
      }
    }
    console.log(arr.join(""));
  });
