// my solution
function diffArray(arr1, arr2) {
    return arr1
        .filter(el => !arr2.includes(el))
        .concat(arr2.filter(el => !arr1.includes(el)))
}

// using lodash
const difference = require('lodash/difference')

