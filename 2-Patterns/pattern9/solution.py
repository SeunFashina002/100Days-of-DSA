"""
            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *
    * * * * * * * * *
      * * * * * * *
        * * * * * 
          * * *
            *  

"""

def pattern7(n):
  for i in range(n):
      # left spaces
      for j in range(n - i - 1):
          print("", end=" ")
      
      # stars
      for j in range(2*i+1):
          print("*", end="")

      # right spaces
      for j in range(n - i - 1):
          print("", end=" ")
      
      print("")
    
def pattern8(n):
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


pattern7(5)
pattern8(5)