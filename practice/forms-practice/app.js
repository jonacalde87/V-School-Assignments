const form = document.form

// Submit event
form.addEventListener("submit", function (event) {
    event.preventDefault() // to stop refreshing the page when submit button is clicked. Always need!!!

    const firstName = form.firstName.value // to capture the user text
    const lastName = form.lastName.value

    // form.firstName.value = " " // to clear form after submit button click
    // form.lastName.value = " "

    console.log(firstName + " " + lastName) //to show in console

    // ***to show the user input on the DOM*** //

    // 1. <h1></h1>
    const h1 = document.createElement('h1')
    //2. <h1>Harry Potter</h1>
    h1.textContent = firstName + " " + lastName + ", Welcome to the awesome world of Harry Potter"
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
})