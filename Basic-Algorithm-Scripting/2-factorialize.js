/*jshint esversion: 6 */

// using for loop
function factorialize(num) {
  let total = 1
  for (let i = 1; i <= num; i++) {
    total = total * i
  }
  return total
}

// using recursion
function factorialize2(num) {
  if (num <= 1) {
    return 1
  }
  else {
    return num * factorialize2(num - 1)
  }
}

// using reduce()


console.log(factorialize(0));
console.log(factorialize(1));
console.log(factorialize(5));
console.log(factorialize(10));
console.log('------------');
console.log(factorialize2(0));
console.log(factorialize2(1));
console.log(factorialize2(5));
console.log(factorialize2(10));
