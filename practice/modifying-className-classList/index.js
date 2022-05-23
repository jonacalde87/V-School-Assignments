// className
// var className = document.querySelector("#header").className
// console.log(className)

// classList
document.querySelector("#header").classList.add("new-class") // to add another class using js

document.querySelector("#header").classList.remove("another") // to remove another class using js

console.log(document.querySelector("#header").className) // output: title new-class

document.querySelector("#header").classList.toggle("another") // toggle will remove or add the class, in this case will add it

console.log(document.querySelector("#header").className) //output: title another new-class
