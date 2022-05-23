// // Use Rest operator(...): return an array of animals. no matter how many animals are passed to it
// function collectAnimals(...animals) {
//     return animals
// }
// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// // OUTPUT:["dog", "cat", "mouse", "jackolope", "platypus"]
// /****************************************** */
// // Write a function that returns a food object with the array names as properties.
// // You'll use an ES6 shorthand syntax that becomes useful when a variable name is 
// // mentioned twice in both the name and value of properties in your object:

// // function combineFruit(fruit, sweets, vegetables){
// //     return {}
// // }

// function combineFruit(fruits, sweets, vegetables) {
//     return {fruits, sweets, vegetables}
//     }
//     console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["tomato", "potato"]))
// // => {
// //         fruit: ["apple", "pear"],
// //         sweets: ["cake", "pie"],
// //         vegetables: ["tomato", "potato"]
// //      }
/************************************** */
//Use destructuring to use the property names as variables. Destructure the object in the parameter:

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks",
    time: "10am",
    who: "alosha"
}
function parseSentence({location,duration}){
    return `We're going to have a good time in ${location} for ${duration}.`
  }
  console.log(parseSentence(vacation))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   //output:We're going to have a good time in Burly Idaho for 2 weeks.
// /*********************************** */
// //Use array destructuring to make this code ES6:
// // function returnFirst(items){
// //     const firstItem = items[0]; /*change this line to be es6*/
// //     return items
// // }
// const returnFirst = (items) => { 
//     const [firstItem, secondItem , thirdItem] = items
//     return `${firstItem}, ${thirdItem}`
// }
// console.log(returnFirst(["charger", "shoes", "ID", "suitcase"]))
// //OUTPUT: charger, ID
// /***************************************** */
// // Write destructuring code to assign variables that will help us return the expected string. 
// // Also, change the string to be using Template literals:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// const returnFavorites = ([firstFav, secondFav, thirdFav]) => {
//     return `My top three favorite activities are: ${firstFav}, ${secondFav} and ${thirdFav}`
// }
// console.log(returnFavorites(favoriteActivities))
// //OUTPUT: My top three favorite activities are: magnets, snowboarding and philanthropy
// /******************************* */
// // Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
// // You will need to change how the arrays are passed in. 
// // You may write it assuming you will always recieve three arrays if you would like to.

// // function combineAnimals() {
// // }
// // const realAnimals = ["dog", "cat", "mouse"];
// // const magicalAnimals = ["jackolope"];
// // const mysteriousAnimals = ["platypus"];
// // combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// const combineAnimals = (...animals) => {
//     return animals
// }
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// console.log(combineAnimals(...realAnimals,...magicalAnimals, ...mysteriousAnimals))
// // OUTPUT: ["dog", "cat", "mouse", "jackolope", "platypus"]
// /*************************** */
// //Try to make the following function more ES6y:

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }
//   //******************************** */
// //   Make the following function more ES6y. Use at least both the rest and spread operators:
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }

  

//   // Constructor is "what it is to be car"
// function Car(make, model){
//     this.make = make
//     this.model = model
// }
// // What do cars "Do"
// Car.prototype.honk = function(){
//     console.log("Honk")
// }

// // instantiate
// const jeep = new Car("jeep", "cherokee")
// const mazda = new Car("mazda", "3")

// jeep.honk( )
// console.log(mazda.make)
// //OUTPUT: mazda Honk

  


