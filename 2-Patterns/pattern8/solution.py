"""

    * * * * * * * * *
      * * * * * * *
        * * * * * 
          * * *
            *     

"""

n = 5 

for i in range(n):
    # left spaces
    for j in range(i):
        print("", end=" ")

    # stars
    for j in range(2 * (n - i) - 1):
        print("*", end="")

    # right spaces
    for j in range(i):
        print("", end=" ")

    print("")
