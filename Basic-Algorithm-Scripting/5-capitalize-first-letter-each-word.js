// ====== My Solution ======
function titleCase(str) {
  let wordArray = str.toLowerCase().split(' ')

  // create new array by returning value in new array from value in old array
  let uppercasedArray = wordArray.map(word => {
    return word.replace(word[0], word[0].toUpperCase())
  })

  return uppercasedArray.join(' ')
}


// ====== old way without using map ======
// function titleCase(str) {
//   var newArray = str.toLowerCase().split(' ');
//   var result = [];
//   for(var i=0; i < newArray.length ; i++){
//     var val = newArray[i];
//     result.push(val.replace(val[0], val[0].toUpperCase())) ;
//   }
//   return result.join(" ");
// }


// ====== Regex way ======
// find all non-whitespace characters (\S)
// at the beginning of a string (^)
// or after any whitespace character (\s)
// g modifier means global and makes the pattern match *all* occurences (not just the first one)

// Note: arrow function with "concise body" there's an implied "return" statement
// (as opposed to "block body" where explicit "return is needed")
function titleCaseRegex(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase())
}





let test = "I'm a little tea pot"
console.log('titleCase:', titleCase(test));
console.log('titleCaseRegex:', titleCaseRegex(test));
