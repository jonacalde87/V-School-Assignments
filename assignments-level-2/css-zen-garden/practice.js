// You'll be using:

// arrow functions
// rest
// spread
// destructuring in a parameter
// default parameters

//-------------------------------------------------------------------------------------------
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(/*your code here*/) {  
    /*and here*/ 
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//-------------------------------------------------------------------------------------------
// Use destructuring to use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence(/*param*/){
  return `We're going to have a good time in ${location} for ${duration}`
}

// console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter

//-------------------------------------------------------------------------------------------
// Make the following function more ES6xy. Use at least both the rest and spread operators:
// this function should add as many items to the front of the returned array as the caller of the function wants
function unshift(array, a, b, c, d, e) {  
  return [a, b, c, d, e].concat(...array);
}

//-------------------------------------------------------------------------------------------
// make "greeting" default to "hello"
function greet(name, greeting){
    return greeting + ", " + name
}

console.log(greet('Emily'))