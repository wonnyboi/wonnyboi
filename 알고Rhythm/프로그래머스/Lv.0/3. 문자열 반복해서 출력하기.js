const readline = require("readline");
let input = [];
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input = line.split(" ");
  })
  .on("close", () => {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n));
    // for (let i = 0; i < n; i++) {
    //   console.log(str);
    // }
  });
