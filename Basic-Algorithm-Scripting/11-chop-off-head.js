/*
Return the remaining elements of an array after chopping off n elements from the head.
*/

// ====== My Solution ======
function slasher(arr, howMany)  {
  return arr.slice(howMany)
}


// solution using Array.protoype.splice()
// modifies original array in place !
// returns deleted elements !
// start at index 0 then delete howMany
// splice() has optional 3rd, 4th, etc parameters which are elements to insert at that position
function slasherSplice(arr, howMany)  {
  arr.splice(0, howMany)
  return arr
}

let test = [1, 2, 3, 4, 5]
console.log(slasher(test, 2));
console.log(slasherSplice(test, 3));
