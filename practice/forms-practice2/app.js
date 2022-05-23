const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    alert("its working") // show message to user; not necesary

//radio input
    //console.log(form.gender.value) // display to console user gender selection

    //checkbox input
    //console.log(form.entertainment)

    /* const checkedInputs = []
    for(let i = 0; i < form.entertainment.length; i++ ) {
        if(form.entertainment[i].checked) {
            checkedInputs.push(form.entertainment[i].value)
        }        
    }
    console.log(checkedInputs) */

    // select option input
    // console.log(form.city.value)


})