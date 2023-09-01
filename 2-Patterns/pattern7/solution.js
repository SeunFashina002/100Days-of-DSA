/*  

            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *

*/

let n = 5;
for (let i = 0; i < n; i++) {
  // left space
  for (let j = 0; j <= n - i; j++) {
    process.stdout.write(" ");
  }

  // stars
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }

  // right space
  for (let j = 0; j <= n - i; j++) {
    process.stdout.write(" ");
  }

  console.log("");
}
