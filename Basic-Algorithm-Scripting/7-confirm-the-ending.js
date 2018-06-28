// Check if a string (first argument, str) ends with the given target string (second argument, target).
// Note ES6 now has .endsWith()

// ====== My Solution ======

// .substr(startIndex, length)
// -- if no length, go till end of string
// -- if startIndex is negative it goes from end of string

// .substring(startIndex, endIndex)
// -- if no length, go till end of string (same as .substr())
// -- if either indexnegative, treats it like 0 (different)
function confirmEnding(str, target) {
  return str.substr(-target.length) === target
}


console.log(confirmEnding('Bastien', 'n'));
console.log(confirmEnding("Congratulation", "on"))
console.log(confirmEnding("Open sesame", "pen"))