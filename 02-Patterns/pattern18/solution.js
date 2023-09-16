/*

E
D E
C D E
B C D E
A B C D E

*/

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// TODO: replace 5 with n
for (let i = 0; i < 5; i++) {
  let step = 5 - 1 - i;
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${alphabet[step]} `);
    step += 1;
  }
  console.log("");
}
