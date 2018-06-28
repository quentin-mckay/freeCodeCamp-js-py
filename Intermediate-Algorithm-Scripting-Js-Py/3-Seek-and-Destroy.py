def destroyer(arr, *args):
    return [val for val in arr if val not in args]


# === tests ===
print(destroyer([1,2,3,1,2,3], 2, 3))
print(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
print(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
print(destroyer([2, 3, 2, 3], 2, 3))