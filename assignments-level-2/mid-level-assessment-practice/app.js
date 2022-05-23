//*** ES6 Practice ***/

// var, let or const
// let name = "John"
// let age = 101
// function runForLoop(pets) {
//     const petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }
// runForLoop(["cat", "dog"])

// Template literals
// let firstName = "Jonathan"
// let lastName = "Calderon"
// console.log("\nHi my name is " + firstName + " " + lastName) // Old
// console.log(`Hi my name is ${firstName} ${lastName}`) // ES6

// Rest(...)
// const animals = ["dog", "cat", "mouse", "jackolope", "platypus"]
// function collectAnimals(animals) {  
//     return animals 
// } console.log(collectAnimals(animals))

//ES6 spread parameter
// function collectAnimals(...animals) {
//     return animals
// }
// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// Spread
// const uglyColors = ['red', 'green']; 
// const prettyColors = ['orange', 'yellow']; 
// // let result = uglyColors.concat(prettyColors);

// let result = [...uglyColors, ...prettyColors] // spread and rest
// console.log(result)

//Arrow function
// const carrots = ["bright orange", "ripe", "rotten"]
// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

// mapVegetables = (arr) => {
//     return arr.map(function (carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(carrots))

//if function has 1 statement and return a value, you can remove return and {}
// let hello = function() {
//     return "Hello World!";
//   } 

// const hello = () => "Hello World!";
// console.log(hello())

// Destructuring
// const vacation = {  
//     location: "Bahamas",
//     duration: "2 weeks",
//     time: "central",
//     weather: "sunny" 
//   };

//   function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
//     console.log(parseSentence(vacation))

// Default
// function greet(name, greeting){
//     return greeting + ", " + name
// }

// function greet(name, greeting = hello) {
//     return `${greeting}, ${name}`
// }
// console.log(greet('Emily', "wassap"))

// classes
// class Vehicle{
//     constructor(make, model){
//         this.make = make
//         this.model = model
//     }
// honk(){
//         console.log("hooonk")
//     }
//  drive(){
//         console.log("Vrooom")
//     }
// }

// // motorcycle class is inheriting make and model from the cehicle class (extends keyword)
// class Motorcycle extends Vehicle {
//     constructor(make, model, hasSideCar){
//         super(make,model) // telling to copy from vehicle class
//         this.hasSideCar = hasSideCar
//     }
// }

// const jeep = new Vehicle("jeep", "cherokee")
// const harley = new Motorcycle("Harley", "davidson", true)
// harley.honk() // will check on motorcycle class first and then will check on super class(vehicle)





