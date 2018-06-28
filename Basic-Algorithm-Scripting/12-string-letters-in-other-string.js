// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.

// basically, does every letter in the second string  make an appearance in the first string?


// ====== My Solution ======
// most of the Solutions thread answers were surprisingly ugly
// oddly enough this doesn't seem to appear as a solution in the Solutions thread of freeCodeCamp
function mutation(arr) {
  let firstString = arr[0].toLowerCase()
  let secondString = arr[1].toLowerCase()

  return secondString.split('').every(letter => firstString.includes(letter))
}


let test = ['hello', 'hey']

console.log(mutation(test));  // should return false because 'y' isn't in 'hello'
