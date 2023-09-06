/*

A
A B
A B C
A B C D
A B C D E

*/

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${alphabet[j]} `);
  }
  console.log("");
}
