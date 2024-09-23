const readline = require("readline");

let a = [];
let counter = 0;

const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (answer) => {
    a = answer.split(" ");
  })
  .on("close", () => {
    console.log(`a = ${Number(a[counter])} \nb = ${Number(a[counter + 1])}`);
  });
