"""
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

"""

inc = 1
for i in range(1, 6):
    for j in range(i):
        print(inc, end=" ")
        inc+=1
    print("")
