/* 

            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *
    * * * * * * * * *
      * * * * * * *
        * * * * * 
          * * *
            *  

*/

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    // left space
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    // stars
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write("*");
    }

    // right space
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(" ");
    }

    console.log("");
  }
}

function pattern8(n) {
  for (let i = 0; i < 5; i++) {
    // left spaces
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }

    // stars
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      process.stdout.write("*");
    }

    // right spaces
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }

    console.log("");
  }
}

pattern7(5);
pattern8(5);
