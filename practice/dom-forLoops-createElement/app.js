var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "Joe Montana"
]

// use for loop over powerRangers array
var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) { // for every item in the array I want to create a new li
    
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i] // change textContent
    rangersList.append(newName) // append newName to li

}

// using innerHtml
for (var i = 0; i < powerRangers.length; i++) {
rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}



