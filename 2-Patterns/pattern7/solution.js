/*  

            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *

*/

for (let i = 0; i < 5; i++) {
  // left space
  for (let j = 0; j <= 5 - i; j++) {
    process.stdout.write(" ");
  }

  // stars
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write("*");
  }

  // right space
  for (let j = 0; j <= 5 - i; j++) {
    process.stdout.write(" ");
  }

  console.log("");
}

// function logSpace(n) {
//   for (let i = 0; i < n; i++) {
//     process.stdout.write(" ");
//   }
// }

// logSpace(5);
