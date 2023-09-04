"""

*
* *
* * *
* * * *
* * * * *
* * * *
* * * 
* *
*

"""

n = 9; #number of rows
breakpoint = 5; #row where the number of stars started decreasing

for i in range(1, 10):
    stars = i
    if stars > breakpoint: stars = 2 * breakpoint - i
    for i in range(stars):
        print("*", end=" ")
    print("")