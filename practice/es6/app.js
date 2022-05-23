// ES6 Part 1

// const and let better than var

    //const= constant will never change 
    // const firstName = "joe"
    // firstName = "steve" // it cannot be changed
    // console.log(firstName)
    // OUTPUT: TypeError: Assignment to constant variable.

    //let- can change
    // let age = 12
    // age = 13
    // console.log(age)
    // OUTPUT: 13

// Global (outside a function), local scope (inside a function), bracket (inside brackets)
// function sum(a, b) {
//     return a + b
// }
// console.log(a) // trying to use it outside the local scope. gives error
// OUTPUT: ReferenceError: a is not defined

// spread and rest (gather)
    // Syntax: ...
    // function maxNumber(...nums) { // rest
    //     console.log(nums)
    // }
    // maxNumber(0, 3, 58, 20)
    //OUTPUT: [ 0, 3, 58, 20 ]

    // objects and arrays
    //ARRAYS
    // const colors1 = ["red", "blue"]
    // const colors2 = ["yellow", "green"]

    // const allColors = [...colors1, ...colors2] // spread to combine both colors
    // console.log(allColors)
    // //OUTPUT: [ 'red', 'blue', 'yellow', 'green' ]

    // //OBJECT
    // const person = {
//     //     name: "rick",
//     //     age: 50
//     // }
    
//     // const personCopy = { ...person }
//     // console.log(personCopy)
//     //OUTPUT: { name: 'rick', age: 50 }

// // template literals
// // const name = "joe"
// // "hi " + name
// // const greeting = `hi ${name}`
// // console.log(greeting)

// // import & export


// //fat arrow functions
//     // 
//     //function declaration
//     // function sum () {

//     // }

//     // // function expression (its a function saved in a variable)
//     // const sum2 = function() {

//     // }

//     // //fat arrow syntax: remove word function and add fat arrow on right
//     // const sum2ES6 = word =>  console.log(`ES6 is ${word}!`)

 


// // object literals- building objects from variables; instead of using key value pair
// const blue = "blue"
// const green = "green"
// const red = "red"
// const colors = {red,green, blue}
// console.log(colors)


// // object destructing: use curly braces
// const user = {
//     username: "joe123",
//     age: 20,
//     _id: "ds45d4s578"
// }

// const {username, age, _id} = user
// console.log(username)
// //OUTPUT: joe123

// //Array destructing: use brackets
// const names = ["john", "betty", "nick"]
// const [item1, item2, item3] = names
// console.log(item2)
//OUTPUT: betty

// default parameters
function sum(a = 5, b = 10) {
    return a + b
}

console.log (sum(7)) // you are changing the variable (a) to 7 now
//OUTPUT: 17