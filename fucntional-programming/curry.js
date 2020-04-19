// Currying achieved using recursion 
// Reference - https://hackernoon.com/currying-in-js-d9ddc64f162e

function curry(fn) {
  if (fn.length === 0) {
    return fn
  }

  function nest() {
    if (args.length === fn.length) {
      return fn(...args)
    }

    return (...xs) => {
      args = args.concat(xs)
      return nest()
    }
  }

  let args = []
  return nest()
}

const sum = curry((x, y, z) => x + y + z)

console.log(sum(1, 2, 3))
console.log(sum(1, 2)(3))
console.log(sum(1)(2, 3))
console.log(sum(1)(2)(3))