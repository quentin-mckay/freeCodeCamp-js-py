# using list comprehensions
def diffList(list_1, list_2):
    # filter just the ones that aren't in the other array
    diffs_1 = [el for el in list_1 if el not in list_2]
    diffs_2 = [el for el in list_2 if el not in list_1]
    
    # merge them
    diffs_1.extend(diffs_2)  # .extend() mutates and returns None
    return diffs_1

# using set math
def diffList(list_1, list_2):
    return list(set(list_1).symmetric_difference(set(list_2)))

# === tests ===
print(diffList([1,2,3,5], [1,2,3,4,5]))
print(diffList([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))