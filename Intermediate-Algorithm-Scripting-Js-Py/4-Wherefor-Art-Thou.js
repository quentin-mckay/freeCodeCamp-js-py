function whatIsInAName(collection, source) {
    return collection.filter(obj => {
        return Object.keys(source).every(key => source[key] === obj[key])
    })
}


// === tests ===
let result = whatIsInAName(
    [
        { first: "Romeo", last: "Montague" }, 
        { first: "Mercutio", last: null }, 
        { first: "Tybalt", last: "Capulet" }
    ], 
    { last: "Capulet" })

console.log(result) 
