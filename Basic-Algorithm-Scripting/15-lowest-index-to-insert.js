// Return the lowest index at which a value (second argument) should be
// inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.



// this was my initial attempt BUT
// you can't return from within a forEach !!!
function getIndexToInsBad(arr, num) {
  arr.sort().forEach((element, index) => {
    console.log(element, index, (num < element));
    if (num < element) {
      return index
    }
  })
  return arr.length
}




// ====== My Solution ======
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b)  // sort occurs IN PLACE !

  let result = arr.findIndex(el => num <= el)

  if (result === -1) {
    return arr.length
  }
  else {
    return result
  }
  // return result === -1 ? arr.length : result
}



let test = [5, 3, 20, 3]
console.log(getIndexToIns(test, 5));
