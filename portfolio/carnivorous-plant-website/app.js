// to see the add to cart functionality in console
let button1 = document.getElementById("button1")
function addCart() {
    console.log("Added a Venus Fly Trap to cart")
}
button1.addEventListener("click", addCart) //calling addCart function

let button2 = document.getElementById("button2")
function addCart2() {
    console.log("Added a Pitcher Plant to cart")
}
button2.addEventListener("click", addCart2)

let button3 = document.getElementById("button3")
function addCart3() {
    console.log("Added a Sundew to cart")
}
button3.addEventListener("click", addCart3)


/* This part of the code will check the price of the plants
and mark red anything over $25 and green anything less than
$25 */
document.addEventListener('DOMContentLoaded', function () {
    //This is array of objects
    const carniPlant = [
        {
            name: "Venus Fly Trap",
            price: 14,
            vendor: "New York"
        },
        {
            name: "Pitcher Plant",
            price: 50,
            vendor: "Atlanta"
        },
        {
            name: "Sundew",
            price: 34,
            vendor: "Florida"
        }
    ]

    let colors = ["red", "green"]

    //Load the data from the array    
    for (let i = 0; i < carniPlant.length; i++) {
        console.log(i)
        let person = carniPlant[i];

        let personDiv = document.createElement("div");
        personDiv.classList.add("person");

        if (person.price > 25) { // dot notation example. Only one attribute
            personDiv.style.color = colors[0];
        } else {
            personDiv.style.color = colors[1];
        }

        personDiv.innerHTML = `<h2>${person.name}</h2>
        <p>Price: $${person.price}</p>
        <p>Vendor: ${person.vendor}</p>`;
        document.body.appendChild(personDiv);
    }

});






for (let i = 0; i < 3; i++) {
    console.log(i)
}






// **Event Listener to change background color after click**
document.getElementById("button1").addEventListener("click", function () {
    document.body.style.backgroundColor = "black"
})

document.getElementById("button2").addEventListener("click", function () {
    document.body.style.backgroundColor = "pink"
})

document.getElementById("button3").addEventListener("click", function () {
    document.body.style.backgroundColor = "grey"
})

// console.log([name][price][city]) // bracket notation example