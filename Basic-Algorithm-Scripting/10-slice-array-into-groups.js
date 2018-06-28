/*
Write a function that splits an array (first argument) into groups
the length of size (second argument)
 and returns them as a two-dimensional array.
 */

// ====== My Solution ======
function chunkArray(arr, size) {
  let finalArray = []
  for (let i=0; i < arr.length; i+=size) {
    finalArray.push(arr.slice(i, i+size))
  }
  return finalArray
}


// ====== cool ES6 way ======
const chunkArrayInGroups = (arr, size) =>
  [...Array(Math.ceil(arr.length / size))].map((val, i) =>
    arr.slice(i * size, (i + 1) * size));


// ====== neat ways to create Arrays (like above example) ======
// both of these create array like [0, 1, 2, 3, 4, ...]
let test = [...Array(4)].map((val, i) => i)
test = [...Array(10).keys()]
console.log(test);





console.log('chunkArray:', chunkArray(['a', 'b', 'c', 'd'], 3))
