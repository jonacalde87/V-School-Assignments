// //1) Make an array of numbers that are doubles of the first array

//  arr = [2, 5, 100]
// //takes a function as parameter
// const doubleNumbers = arr.map(function(numbers) {
//     return numbers * 2
// })
// console.log(doubleNumbers)
// //OUTPUT: [ 4, 10, 200 ]

// //ES6:
// const doubleNum = arr.map((num) => num * 2)
// console.log(doubleNum)

// // 2) Take an array of numbers and make them strings
// const arr = [2, 5, 100]
// const stringItUp = arr.map(function(string) {
//   return string + ""
// })
// console.log(stringItUp)
// //OUTPUT: [ '2', '5', '100' ]

// //ES6: 
// const stringIt = arr.map(str => str + "")
// console.log(stringIt)

// 3) Capitalize the first letter of each name and make the rest of the characters lowercase
// const arr1 = ["john", "jacob", "jonathan", "alosha"]
// const capitalizeFirstLetter = arr1.map(function(first) {
//     return first[0].toUpperCase() + first.slice(1).toLowerCase()
// })
// console.log(capitalizeFirstLetter)

//4) Make an array of strings of the names
// const arr = [
//   {
//   name: "Angelina Jolie", age: 80
//   },
//   {
//   name: "Eric Jones", age: 2
//   },
//   {
//   name: "Paris Hilton", age: 5
//   },
//   {
//   name: "Kayne West", age: 16
//   },
//   {
//   name: "Bob Ziroll", age: 100
//   }
// ]
// const namesOnly = arr.map(function(names) {
//   return names.name
// })
// console.log(namesOnly)

//ES6:
//  const namesOnly = arr.map(names => names.name) 
//  console.log(namesOnly)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
const candidates = [
  {
  name: "Angelina Jolie",
  age: 80
  },
  {
  name: "Eric Jones",
  age: 2
  },
  {
  name: "Paris Hilton",
  age: 5
  },
  {
  name: "Kayne West",
  age: 16
  },
  {
  name: "Bob Ziroll",
  age: 100
  }
  ]
 
  const result = candidates.map(function(oldEnough) {
      return oldEnough.age >= 18 ? oldEnough.name + ' can go to see The Matrix' : 
    oldEnough.name + ' cannot go to see The Matrix'
  })
  console.log(result)
