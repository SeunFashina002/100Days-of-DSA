"""
E
D E
C D E
B C D E
A B C D E

"""

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

# TODO: replace 5 with n

for i in range(5):
    step = 5 - 1 - i
    for j in range(i+1):
        print(alphabet[step], end=" ")
        step += 1
    print("")

# for (let i = 0; i < 5; i++) {
#   let step = 5 - 1 - i;
#   for (let j = 0; j < i + 1; j++) {
#     process.stdout.write(`${alphabet[step]} `);
#     step += 1;
#   }
#   console.log("");
# }
