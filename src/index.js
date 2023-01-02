module.exports = function reverse(n) {
  let tempNumber = n < 0 ? -n : n

  if (tempNumber % 10 === 0) {
    tempNumber = tempNumber / 10
  }

  return +tempNumber.toString().split('').reverse().join('')
}