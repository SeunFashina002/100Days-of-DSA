/*

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5

*/


for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write(`${i+1} `)
    }
    console.log("")
}