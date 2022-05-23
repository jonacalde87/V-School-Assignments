// url: https://api.vschool.io/jonacalde/todo

// POST request: takes 2 arguments("url", "new object")*********************
// request body

//need a form to capture user input and add to database
const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    //to capture the new values from the form
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    //sent response
    axios.post("https://api.vschool.io/jonacalde/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
})

// Get requests with axios*********************************

// Get All
axios.get("https://api.vschool.io/jonacalde/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))


// Get One
// axios.get("https://api.vschool.io/jonacalde/todo/622805fa145e7804c26a25e2")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// to make it show on the DOM
// axios.get("https://api.vschool.io/jonacalde/todo")
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++) {
//             const h1 = document.createElement("h1")
//             h1.textContent = response.data[i].title
//             document.body.appendChild(h1)
//         }
//     })
//     .catch(error => console.log(error))

// DELETE request******************************************
// axios.delete("https://api.vschool.io/jonacalde/todo/622bb2ba145e7804c26a26a9")
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

//if we have a delete button, add a button in html 
// const button = document.getElementById('delete-button')

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/jonacalde/todo/5d8bd511ee91575e6d49e06e")
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })

// **********************************************************
//PUT request with Axios- to update. needs id and item to update

// const updates = {
//     title: "This is a newly updated title",
//     description: "Last topic before the assignment"
// }

// axios.put("https://api.vschool.io/jonacalde/todo/622bb473145e7804c26a26aa", updates)
// .then(response => console.log(response.data))
// .catch(error => console.log(error))

// Get All
// axios.get("https://api.vschool.io/jonacalde/todo")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
//**************************************************************








