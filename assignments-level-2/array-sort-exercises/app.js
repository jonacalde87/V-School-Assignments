// 1) Sort an array from smallest number to largest
// const arr = [1, 3, 5, 2, 90, 20]
// arr.sort(function(a,b) {
//     return a - b
// })
// //ES6:arr.sort((a,b) => a - b)
// console.log(arr)
// //OUTPUT: [ 1, 2, 3, 5, 20, 90 ]

// 2) Sort an array from largest number to smallest
// const arr = [1, 3, 5, 2, 90, 20]
// arr.sort(function(a,b) {
//     return b - a
// })
//ES6:arr.sort((a,b) => b-a)
// console.log(arr)
//OUTPUT: [ 90, 20, 5, 3, 2, 1 ]

// 3) Sort an array from shortest string to longest
// const arr = ["dog", "wolf", "by", "family", "eaten"]
// arr.sort(function(a,b){
//     return a.length - b.length
// }) 
//ES6: arr.sort((a,b) => a.length - b.length)
// console.log(arr)
//OUTPUT: [ 'by', 'dog', 'wolf', 'eaten', 'family' ]

// 4) Sort an array alphabetically
// const arr = ["dog", "wolf", "ant", "by", "family", "eaten"]
// arr.sort()
// console.log(arr)
// //OUTPUT: [ 'ant', 'by', 'dog', 'eaten', 'family', 'wolf' ]

// 5) Sort the objects in the array by age
const arr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
arr.sort(function(a,b) {
    return a.age - b.age
})
//ES6: arr.sort((a,b) => a.age - b.age)
console.log(arr)
// OUTPUT: [
//   { name: 'Misunderstood Observer', age: 2 },
//   { name: 'Quiet Samurai', age: 22 },
//   { name: 'Unlucky Swami', age: 77 },
//   { name: 'Arrogant Ambassador', age: 100 }
// ]