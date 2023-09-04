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

n = 5;
for (let i = 1; i <= 2 * n - 1; i++) {
  let stars = i;
  if (stars > n) stars = 2 * n - i;
  for (j = 0; j < stars; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}
