const form = document.passenger

form.addEventListener("submit", () => {
    //e.preventDefault() // I want to clear all fields after submit button

    let fName = form.firstName.value
    let lName = form.lastName.value
    const age = form.age.value
    let gender = form.gender.value
    const destination = form.city.value
    const checkedDiet = []
    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            checkedDiet.push(form.diet[i].value)
        }
    }
    alert("First Name: " + fName +
        "\nLast Name: " + lName +
        "\nAge: " + age +
        "\nGender: " + gender +
        "\nDestination: " + destination +
        "\nDietary restrictions: " + checkedDiet)
})
