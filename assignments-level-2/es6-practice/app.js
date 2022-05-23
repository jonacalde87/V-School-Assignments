// # **`let` and `const`**
// Replace all the `var`s with `let` and `const`. Alter the code however necessary
// to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). 
// You only need to delete `var` and insert `let` and `const`
// John is the pet owner, and his name should be stored differently than the other names.

let name = "John"
const age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])
//OUTPUT:
// pet name:  fluffy
// pet name:  spot
// man name:  John
/************************************************************ */
//ES6 Arrow Functions
// Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's 
// starting a function, and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]
// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

const mapVegetables = arr => {
    return arr.map(function (carrot) {
      return { type: "carrot", name: carrot };
    });
  }; 
  console.log(mapVegetables(carrots)); 
  //OUTPUT:     
//   [
//     { type: 'carrot', name: 'bright orange' },
//     { type: 'carrot', name: 'ripe' },
//     { type: 'carrot', name: 'rotten' }
//   ]
/*******************************************************/
// Re-write this .filter() ’s callback function using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

const filterForFriendly = arr => {
    return arr.filter(function(person) {
        return person.friendly
    })
}
console.log(filterForFriendly(people))
//OUTPUT: 
// [
//     { name: 'Luigi', friendly: true },
//     { name: 'Mario', friendly: true }
//   ]
//*************************************************** */
//Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }
let doMathSum = (a,b) => a + b
console.log(doMathSum(100,250))
//OUTPUT: 350
//********************************************** */
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like 
// the following:
// `firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`

printString = (firstName, lastName, age) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)    
printString("Jane", "Doe", "100")
//OUTPUT: Hi Jane Doe, how does it feel to be 100?
//**************************************************************** */
//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ]
//  function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }

//ES6 answer: 
const filterForDogs = animals.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
console.log(filterForDogs)
//OUTPUT: [ { type: 'dog', name: 'theodore' }, { type: 'dog', name: 'sparky' } ]
//****************************************************** */
//Using template literals, write a function that takes location and name parameters 
//and outputs a message formatted like this:
printString = (location, name) => console.log(
`Hi ${name}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)
printString("Hawaii", "Janice")
//OUTPUT:
// Hi Janice!

//Welcome to Hawaii.

//I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
