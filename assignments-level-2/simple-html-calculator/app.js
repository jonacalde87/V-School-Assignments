// **Requirements:**

// - You will have one section (`<div>`) for each math operation (so 3 sections) total
// - Each section has two inputs to take the first and second numbers
// - Each section will have a button to perform the operation
// - You will inject the result into the HTML (not an alert)
// - Your website will have 3 colors
// - Your website will have proper padding/spacing to lay things out nicely

//** Adding **//
const addForm = document.addition
//submit event
addForm.addEventListener("submit", function(e) {
    e.preventDefault() // stop refreshing page
``
    const firstNumber = parseInt(addForm.firstNumber.value)
    const secondNumber = parseInt(addForm.secondNumber.value)
    addForm.firstNumber.value = "" // to clear form after user input
    addForm.secondNumber.value = ""

    const result = (firstNumber + secondNumber)

    const h3 = document.createElement("h3")
    h3.textContent = firstNumber + " + " + secondNumber + " = " + result
    document.getElementById("addContainer").append(h3)   

    console.log(firstNumber + " + " + secondNumber + " = " + result) //to console the addition
})

//** Substracting **//
const subForm = document.substraction
//submit event
subForm.addEventListener("submit", function(e) {
    e.preventDefault() // stop refreshing page

    const firstNumber = parseInt(subForm.firstNumber.value)
    const secondNumber = parseInt(subForm.secondNumber.value)
    subForm.firstNumber.value = "" // to clear form after user input
    subForm.secondNumber.value = ""

    const result = (firstNumber - secondNumber)

    const h3 = document.createElement("h3")
    h3.textContent = firstNumber + " - " + secondNumber + " = " + result
    document.getElementById("subContainer").append(h3)

    console.log(firstNumber + " - " + secondNumber + " = " + result) //to console the addition
})

//** Multiplication **//
const mulForm = document.multiplication
//submit event
mulForm.addEventListener("submit", function(e) {
    e.preventDefault() // stop refreshing page

    const firstNumber = parseInt(mulForm.firstNumber.value)
    const secondNumber = parseInt(mulForm.secondNumber.value)
    mulForm.firstNumber.value = "" // to clear form after user input
    mulForm.secondNumber.value = ""

    const result = (firstNumber * secondNumber)

    const h3 = document.createElement("h3")
    h3.textContent = firstNumber + " * " + secondNumber + " = " + result
    document.getElementById("mulContainer").append(h3)

    console.log(firstNumber + " * " + secondNumber + " = " + result) //to console the addition
       
})