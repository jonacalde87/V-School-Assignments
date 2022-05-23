const form = document.myForm

form.addEventListener("submit", (e) => {
    e.preventDefault()

   //console.log(form.gender.value) // because you want to select either or, so singular options
    
   // for checkboxes you can check more than 1 option, so an array. a loop is required
//    const checkedInputs = []

//     for(let i = 0; i < form.hobby.length; i++) {
//         if(form.hobby[i].checked) {
//         checkedInputs.push(form.hobby[i].value)
//     }

//     }

//     console.log(checkedInputs)

// Select Option inputs
console.log(form.city.value)
})