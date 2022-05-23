/* Write a function that takes a string as a parameter and returns 
the same string in all capital letters followed by all lowercase letters. */

    // var greeting = "HelLo"
    // var upperCase = greeting.toUpperCase()
    // console.log("The greeting in uppercase is: " + upperCase)
    // var lowerCase = greeting.toLowerCase()
    // console.log("The greeting in lowercase is: " +lowerCase)
    // var upperAndLowerCase = upperCase + lowerCase
    // console.log("The greeting in upper and lowercase is: " +upperAndLowerCase)

/* Write a function that takes a string as a parameter and 
returns a number that is half the string's length, rounded down.*/

// function findMiddleIndex(Hello){
//     console.log(Math.floor("Hello".length / 2))
//     console.log(Math.floor("Hello World".length / 2))
//     }
//     findMiddleIndex("Hello")
//     //findMiddleIndex("Hello World")

/* Write a function that uses slice() and the other functions you've written 
to return the first half of the given string. */

// var greeting = "Hello"
// var returnFirstHalf= greeting.slice(0, 2)
// var greeting2 = "Hello World"
// var returnFirstHalf2= greeting.slice(0, 5)
// console.log(returnFirstHalf)
// console.log(returnFirstHalf2)

/* Write a function that takes a string as a parameter and returns 
that string where the first half is capitalized, and the second half is lowercase.*/

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

const inputName = "jonacalde"
wordTransform(inputName)
function wordTransform (inputWord) {
    const nameUpper = inputWord.toUpperCase()
    const nameLower = inputWord.toLowerCase()
    const finalName = nameUpper.concat(nameLower)
    console.log(finalName)
}