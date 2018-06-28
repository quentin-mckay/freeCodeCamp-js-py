// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.


// ====== My Solution ======
// Math.max(...innerArray) flattens the innerArray [4, 5, 1, 3]
// into a format Math.max can take Math.max(4, 5, 1, 3)
function largestOfFour(arr) {
  return arr.map(innerArray => Math.max(...innerArray))
}


// using reduce
// first iteration (prev = 1, curr = 22)
// second iteration (prev = 22, curr = 3)
function largestReduce(arr) {
  return arr.reduce((prev , curr) => ((curr > prev) ? curr : prev))
}


let test = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]
console.log('largestOfFour', largestOfFour(test));


let reduceTest = [1,22,3,4,5,6]
console.log('largestReduce', largestReduce(reduceTest));
