/*  

    * * * * * * * * *
      * * * * * * *
        * * * * * 
          * * *
            *     

*/

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

pattern8(5);
