"""

A
BB
CCC
DDDD
EEEEE

"""

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for i in range(5):
    for j in range(i+1):
        print(alphabet[i], end="")
    print("")

