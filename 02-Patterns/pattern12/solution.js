/* 

1             1
1 2         2 1
1 2 3     3 2 1
1 2 3 4 4 3 2 1

*/

n = 4;
for (let i = 1; i <= n; i++) {
  // numbers
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${j}`);
  }

  // space
  for (let j = 0; j < 2 * (n - i); j++) {
    process.stdout.write(" ");
  }

  // numbers
  for (let j = i; j >= 1; j--) {
    process.stdout.write(`${j}`);
  }
  console.log("");
}
