# === 1 ===
yourArray = [1, "apple", True, 4, 5]

# === 2 === 
myArray = ["a", "b", "c", "d"]
myArray[1] = "banana"

# === 3 ===
def mixedNumbers(lst):
    lst[0:0] = ['I', 2, 'three']
    lst[len(lst):] = [7, 'VIII', 9]
    # or... lst.extend([7, 'VIII', 9])
    return lst
# print(mixedNumbers(['IV', 5, 'six']))

# === 4 ===
def popPop(lst):
    popped = lst.pop() # removes last element 
    shifted = lst.pop(0) # removes 0th element
    return [shifted, popped]
# print(popPop(['challenge', 'is', 'not', 'complete']))