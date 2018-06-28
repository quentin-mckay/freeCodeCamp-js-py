// using arguments
function destroyer(arr) {
    const args = Array.from(arguments).slice(1)
    return arr.filter(val => !args.includes(val))
}

// using ...args
function destroyer(arr, ...args) {
    return arr.filter(val => !args.includes(val))
}