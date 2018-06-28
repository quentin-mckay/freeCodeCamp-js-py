// === 1 Use and Array to Store a Collection of Data ===
let yourArray = [1, "apple", true, 4, 5]

// === 2 Access an Array's Contents Using Bracket Notation ===
let myArray = ["a", "b", "c", "d"]
myArray[1] = "banana"

// === 3 Add Items to an Array ===
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three')
    arr.push(7, 'VIII', 9)
    return arr
}
// console.log(mixedNumbers(['IV', 5, 'six']))

// === 4 Remove Items from an Array with pop() and shift() ===
function popShift(arr) {
    let popped = arr.pop()
    let shifted = arr.shift()
    return [shifted, popped]
}
// console.log(popShift(['challenge', 'is', 'not', 'complete']))

// === 5 Remove Items Using splice() ===