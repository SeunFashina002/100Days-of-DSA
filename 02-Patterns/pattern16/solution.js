/*

A
BB
CCC
DDDD
EEEEE

*/
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(alphabet[i]);
  }
  console.log("");
}
