// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// ====== My Solution ======
function bouncer(arr) {
  return arr.filter(el => el == true)
}
