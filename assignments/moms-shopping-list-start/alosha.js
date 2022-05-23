// Select the form
const form = document["grocery-list"]
 
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const toBuy = form.toBuy.value;
    form.toBuy.value = ""

    const ul = document.createElement('ul');
    ul.textContent = toBuy + " "
    document.getElementsByTagName("li")[0].appendChild(ul)

    // const editButton = document.createElement("button");
    // editButton.innerHTML = "edit"; 
    // document.getElementsByTagName("li")[0].appendChild(editButton)

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    document.getElementsByTagName("li")[0].appendChild(deleteButton)

    deleteButton.addEventListener("click", removeListItem); 
        function removeListItem(event) {
            // console.log(event.target.parentElement) => to verify the element to be call
            event.target.parentElement.remove();
        }
        
})