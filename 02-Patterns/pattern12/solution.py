"""

1             1
1 2         2 1
1 2 3     3 2 1
1 2 3 4 4 3 2 1

"""

n = 5
for i in range(1, n):

    # numbers
    for j in range(1, i+1):
        print(j, end="")

    
    # spaces
    for j in range(2*(n-1-i)):
        print("", end=" ")

    # numbers
    for j in range(i, 0, -1):
        print(j, end="")

    print("")