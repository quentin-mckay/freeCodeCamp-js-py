// ========= My Solution ===========

// helper functions
function reverseString(str) {
  return str.split('').reverse().join('')
}

function cleanString(str) {
  return str.replace(/[\W_]/g, '').toLowerCase()  // matches anything that isn't 0-9, a-z, A-Z or _
}

// main function
function isPalindrome(str) {
  str = cleanString(str)
  return str === reverseString(str)
}


// ========= Better Solution ==========
function isPalindrome2(str) {
  str = cleanString(str)
  for (let i = 0, len = str.length - 1; i < str.length/2; i++) {
    if (str[i] != str[len - i]) {
      return false
    }
  }
  return true
}

/*
// ======= Best Solution (Most Performant) ==========
//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why. I just failed this in an interview.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    while ( str[front].match(/[\W_]/) ) {
      front++;
      continue;
    }
    //decrements back pointer if current character doesn't meet criteria
    while ( str[back].match(/[\W_]/) ) {
      back--;
      continue;
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++;
    back--;
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;

}
*/

// -----Tests-----
console.log(reverseString("hello"));
console.log(cleanString("he ll (*#&%@#99_____o"));

let testString = "not a palindrome"
console.log(isPalindrome(testString));
