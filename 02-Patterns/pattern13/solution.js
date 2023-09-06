/*

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

let num = 1;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${num} `);
    num += 1;
  }

  console.log("");
}
