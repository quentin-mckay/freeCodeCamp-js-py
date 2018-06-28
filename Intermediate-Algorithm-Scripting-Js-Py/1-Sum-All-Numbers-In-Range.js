// my solution
function sumAll(arr) {
    let low = Math.min(...arr)
    let high = Math.max(...arr)

    let total = 0
    for (let n = low; n <= high; n++) {
        total += n
    }
    return total
}

// using lodash
const range = require('lodash/range')

function sumAll(arr) {
    let low = Math.min(...arr)
    let high = Math.max(...arr)

    return range(low, high+1).reduce((a, b) => a + b)
}