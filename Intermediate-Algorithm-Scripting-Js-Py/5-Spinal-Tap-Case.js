// using regex
// replace whitespaces or 
function spinalCase(str) {
    return str.replace(/[\s|_]+|([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// ===== tests =====
console.log(spinalCase("This Is Spinal Tap"))
console.log(spinalCase("freeCodeCamp"))


let test = 'this is a test'
console.log(test.replace(/\s/g, '$1'))