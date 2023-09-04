"""

1
0 1 
1 0 1
0 1 0 1
1 0 1 0 1

"""

n = 5
rows = 0
for i in range(n):
    if i % 2 == 0: rows = 1
    for i in range(i+1):
        print(rows, end=" ")
        rows = 1 - rows
    print("")
