

var newLi = document.createElement("li") // create element method such as div, h1, p, li
newLi.textContent = "3" // text I want to replace the new li

var myList = document.getElementById("my-list") // because we want to update ul
//.prepend(newLi) // put new li on top
myList.append(newLi) // append to add a new li

// exercise: add <p> after the ul using js only 
var newParagraph = document.createElement("p")
newParagraph.textContent = "paragraph here. Hello there!"
newParagraph.style.textAlign = "center"  // style in center in JS
newParagraph.style.color = "blue"
newParagraph.style.fontSize = "30px"
document.body.append(newParagraph) // to add it 

// ** innerHTML practice **
var myList = document.getElementById("my-list")
console.log(myList.textContent) // display the HTML elements ignoring li **bad way**
console.log(myList.innerHTML)  // display all elements ** best way to do it **
myList.innerHTML += "<li>4</li>" // to add more elements

// add more elements body
document.body.innerHTML += "<p id = 'paragraph'>V School Rocks!</p>"
document.getElementById("paragraph").style.textAlign = "center" // style an element
