//<script>
const form = document.addItem // to link the HTML file with the js saved in variable using the <form name>

// Submit event: will fire when click button or when user press Enter
document.addItem.addEventListener("submit", function (e) {
    e.preventDefault() //to stop refreshing the page when button is clicked. ALWAYS ADD THIS!   
    const item = form.momInput.value // to grab input from mom
    alert(item + " added to the list") // message to let mom know that item was added
    groceryItem = createGroceryItem() // add item to the list
    document.getElementById("list").appendChild(groceryItem)
    form.momInput.value = "" // to clear user input after submittion. PUT IT AT THE END OF FUNCTION ALWAYS!
})



// function to create new item in the DOM
function createGroceryItem() {
    // will add mom's input in li (groceryItem)
    const groceryItem = document.createElement("li")
    const groceryItemValue = document.getElementById("title").value
    groceryItem.textContent = groceryItemValue


    // create the edit and delete (X) button after each input
    // const editButton = document.createElement("button")
    const deleteButton = document.createElement("button")
    // editButton.innerHTML = "edit"
    deleteButton.innerHTML = "X"

    // to delete an item
    deleteButton.addEventListener("click", () => {
        groceryItem.remove();
    });

    //  edit and delete buttons are not under the item ***
    groceryItem.setAttribute("id", "groceryItem")
    // groceryItem.appendChild(editButton).setAttribute("id", "editButton")
    groceryItem.appendChild(deleteButton).setAttribute("id", "deleteButton")
    return groceryItem
}




