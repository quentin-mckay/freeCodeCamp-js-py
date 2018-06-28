// the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.


// ====== My Solution ======
function rot13(str) {
  let cipherArr = str.toUpperCase().split('').map(letter => {
    let normalized = letter.charCodeAt() - 65
    let shifted = (normalized + 13) % 26
    return shifted + 65
  })
  return String.fromCharCode(...cipherArr)
  // console.log(cipherArr);
}


// ====== better solution ( using String.prototype.replace() ) ======
function better_rot13(str) {
  return str.replace(/[A-Z]/g, letter => String.fromCharCode((letter.charCodeAt() % 26) + 65))
}


let testString = "SERR PBQR PNZC"
console.log(better_rot13(testString))
