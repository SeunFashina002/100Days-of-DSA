/*

* * * * *
* * * *
* * *
* *
*

*/

let n = 5;

for (let i = 0; i < n; i++) {
  for (let j = n; j > i; j--) {
    process.stdout.write("* ");
  }
  console.log("");
}
