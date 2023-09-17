/*
        A
      A B A
    A B C B A
  A B C D C D A
A B C D E D C B A
*/

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 5; i++) {
  // spaces
  for (let j = 0; j < 5 - i - 1; j++) {
    process.stdout.write(" ");
  }

  // alphabet
  let step = 0;
  let breakpoint = (2 * i + 1) / 2;
  for (let j = 0; j < 2 * i + 1; j++) {
    process.stdout.write(alphabet[step]);

    if (j < breakpoint) {
      step += 1;
      process.stdout.write(`${alphabet[step]}`);
    } else {
      step -= 1;
      process.stdout.write(`${alphabet[step]}`);
    }
  }

  // spaces
  for (let j = 0; j < 5 - i - 1; j++) {
    process.stdout.write(" ");
  }

  console.log("");
}
