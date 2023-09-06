"""

A B C D E
A B C D
A B C
A B
A

"""

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for i in range(5):
    inc = 0
    for j in range(5, i, -1):
        print(alphabet[inc], end=" ")
        inc+=1
    print("")
