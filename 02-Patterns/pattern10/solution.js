/*

*
**
***
****
*****
****
***
**
*


*/

let n = 9; //number of rows
let breakpoint = 5; //row where the number of stars started decreasing

for (let i = 1; i <= 9; i++) {
  let stars = i;
  if (stars > breakpoint) stars = 2 * breakpoint - i;
  for (j = 0; j < stars; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}
