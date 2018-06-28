// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.


// ====== My Solution ======
// return array where each element is kept if it's not included in args array
function destroyer(arr, ...args) {
  return arr.filter(el => !args.includes(el))
}


// note: you can also create array from arguments object in 2 ways
// 1. let args = Array.from(arguments)
// 2. let args = [...arguments]
// so instead off adding the ...spread operator in the parameters we could do this
function destroyer(arr) {
  let args = Array.from(arguments).slice(1)
  return arr.filter(el => !args.includes(el))
}
