/*

A B C D E
A B C D
A B C
A B
A

*/

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 5; i++) {
  let inc = 0;
  for (let j = 5; j > i; j--) {
    process.stdout.write(`${alphabet[inc]} `);
    inc += 1;
  }

  console.log("");
}
