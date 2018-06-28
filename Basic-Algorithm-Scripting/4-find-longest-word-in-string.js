// ====== My Solution ======
function findLongestWord(str) {
  let wordArray = str.split(' ')
  let longestWord = wordArray[0]
  wordArray.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })
  return longestWord.length
}


// ====== Using reduce ======
function findLongestWordReduce(str) {
  return str.split(' ')
    .reduce((acc, curr) => {
      return Math.max(acc, curr.length)
    }, 0)
}


let test = "The quick brown fox jumped over the lazy dog"

console.log('findLongestWord', findLongestWord(test));
console.log('findLongestWordReduce', findLongestWordReduce(test));

let arr = [1, 3, 100, -4]
let max = Math.min(...arr)
console.log('max', max);
