def sumAll(lst):
    low = min(lst)
    high = max(lst)

    return sum(range(low, high+1)) # high + 1 to make it inclusive

# === tests ===
print(sumAll([1, 4]))
print(sumAll([4, 1]))
print(sumAll([5, 10]))
print(sumAll([10, 5]))