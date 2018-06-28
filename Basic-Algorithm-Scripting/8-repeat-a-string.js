// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.


// ====== My Solution ======
function repeatStringNumTimes(str, num) {
  let total = ''
  for (let i = 0; i < num; i++) {
    total += str
  }
  return total
}


// using .repeat()
function usingRepeat(str, num) {
  if (num > 0) {
    return str.repeat(num)
  }
  else {
    return ''
  }
}


console.log('repeatStringNumTimes:', repeatStringNumTimes('abc', 3));
console.log('usingRepeat:', usingRepeat('abc', 5));
