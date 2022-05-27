/*** PRELIMINARIES ***/
/* 1. write a for loop that prints to console number 0-9 (inclusive) */
// var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

/* 2. Write a for loop that prints to the console 9 through 0. */
// var reverseNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (i = reverseNum.length - 1; i >= 0; i--) {
//     console.log(reverseNum[i])
// }

/* 3. Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"] */
// const fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

/*** BRONZE MEDAL ***/
//1. Write a for loop that will push the numbers 0 through 9 to an array.
// var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var arr = []
// for (i = 0; i < num.length; i++) {
//     arr.push(num[i])
// }
// console.log(arr)

//2. Write a for loop that prints to the console only even numbers 0 through 100.
// var evenNum = []
// for (i = 0; i <= 100; i++) {
//     if ([i] % 2 === 0) {
//         console.log(i)
//     }
// }

/* 3. Write a for loop that will push every other fruit to 
an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]` */
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var arr = []
// for (i = 0; i < fruit.length; i += 2) {
//     arr.push(fruit[i])
// }
// console.log(arr)

/*** SILVER MEDAL ***/
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

/* 1. Write a loop that will print out all the names of the people of the people array */
// for (i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
//}
/* 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.*/
// var names = []
// var occupations = []
// for (i = 0; i < peopleArray.length; i++) {
//    names.push(peopleArray[i].name)
//    occupations.push(peopleArray[i].occupation)
// }
// console.log(names)
// console.log(occupations)

/* 3. Write a loop that pushes every other name to an array starting with the first person, 
in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".*/
// var names = []
// var occupations = []
// for (i = 0; i < peopleArray.length; i+=2) {
//    names.push(peopleArray[i].name)
//    occupations.push(peopleArray[i].occupation)
// }
// console.log(names)
// console.log(occupations)