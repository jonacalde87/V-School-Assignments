//destructuring 
const { sum, subtract } = require('./math.js')
console.log(sum(10, 20))
console.log(subtract(100, 50))

//revealing module--wont show the "factor variable"
const mult = require('./math2.js')
console.log(mult(10))
