def whatIsInAName(collection, source):
    return [thing for thing in collection
            if all(key_val in thing.items() for key_val in source.items())]

# === tests ===
print(whatIsInAName([{ 'first': "Romeo", 'last': "Montague" }, { 'first': "Mercutio", 'last': None }, { 'first': "Tybalt", 'last': "Capulet" }], { 'last': "Capulet" }))