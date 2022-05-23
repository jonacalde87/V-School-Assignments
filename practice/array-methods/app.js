//var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

//1. push: add item at end of array:
// arrOfFoods.push("cereal")
// console.log(arrOfFoods)

// 2. pop: remove item from end array
// arrOfFoods.pop()
// console.log(arrOfFoods)

// 3. unshift: add items to beggining of array
// arrOfFoods.unshift("potatoe")
// console.log(arrOfFoods)

// 4. shift: removes item at beggining of array
// arrOfFoods.shift()
// console.log(arrOfFoods)

// **********************************************

// 5. concat
// var colors1 = ["blue", "green"]
// var colors2 = ["purple", "red"]
// var newArray = colors1.concat(colors2)
// console.log(newArray)

// 6. indexOf: will find the index of the item
//var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
// var pizzaIndex = arrOfFoods.indexOf("pizza")
// console.log(pizzaIndex)

// 7. slice: will start on the index described and end before the other index
// var newArr = arrOfFoods.slice(1, 3)
// console.log(newArr)

// 8. split: will display each item in the array as strings
// var name = "steve"
// var splitName = name.split("")
// console.log(splitName)
// //OUTPUT: [ 's', 't', 'e', 'v', 'e' ]

// 9. join: turns an array into a string after its split
// var name = "steve"
// var splitName = name.split("")
// var joinedName = splitName.join("-")
// console.log(joinedName)
//OUTPUT: s-t-e-v-e

// 10. reverse
// var name = "rick" // kcir
// var splitName = name.split("")
// var reverseName = splitName.reverse("")
// console.log(reverseName)

// 10.1 to split, reverse, and join in one line
var namePerson = "rick" // kcir
var allAtOnce = namePerson.split("").reverse().join("")
console.log(allAtOnce)

// 11. splice: change the original array
// var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
// arrOfFoods.splice(2, 2, "bacon", "beer") // start at index 2 and cut 2 items; (2, 2); and add anything after that if want
// console.log(arrOfFoods)
//OUTPUT: [ 'pancake', 'egg', 'hamburger' ]