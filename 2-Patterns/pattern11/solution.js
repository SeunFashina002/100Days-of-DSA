/* 

1
0 1 
1 0 1
0 1 0 1
1 0 1 0 1

*/

let n = 5;
let rows = 0;

for (let i = 0; i < n; i++) {
  if (i % 2 == 0) rows = 1;
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write(`${rows} `);
    rows = 1 - rows;
  }
  console.log("");
}
