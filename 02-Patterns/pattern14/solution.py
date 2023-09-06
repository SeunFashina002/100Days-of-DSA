"""
A
A B
A B C
A B C D
A B C D E
"""

alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for i in range(1, 6):
    for j in range(i):
        print(alphabet[j], end=" ")
    print("")