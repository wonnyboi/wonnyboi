const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (answer) => {
    console.log(`line: ${answer}`);

    rl.close();
  })
  .on("close", () => {
    process.exit();
  });

const fs = require("fs");

const input = fs.readFileSync("./test.txt").toString();
console.log(input);
