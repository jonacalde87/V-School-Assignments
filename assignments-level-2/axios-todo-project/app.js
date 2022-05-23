// url: https://api.vschool.io/jonacalde/todo

//clears values after submission
const clearForm = (todoForm) => {
    todoForm.title.value = '';
    todoForm.description.value = '';
    todoForm.imgUrl.value = '';
    todoForm.price.value = '';
}

// Adds new todo (POST)
const todoForm = document.todoform;

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    // capture new values from the form
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    };

// send response
    axios.post("https://api.vschool.io/jonacalde/todo", newTodo)
        .then((response) => {
            createToDo(response.data);
            clearForm(todoForm)
        })
        .catch((error) => console.log(error))
});

// Delete todo
const deleteToDo = (event) => {
    event.preventDefault();
    const id = event.target.parentElement.firstChild.textContent;

    axios.delete(`https://api.vschool.io/jonacalde/todo/${id}`)
        .then(response => { 
            if (response.data.msg === 'Successfully deleted record') {
                event.target.parentElement.remove();
            }
        })
        .catch(error => console.log(error))
};

// Update todo as complete (PUT)
const completeToDo = event => {
    const target = event.target;
    const parentClassList = target.parentElement.classList;
    const id = target.parentElement.firstChild.textContent;
    
    axios.put(`https://api.vschool.io/jonacalde/todo/${id}`, {completed: target.checked})
        .then(response => {
            response.data.completed ? parentClassList.add(complete) : parentClassList.remove(complete)
        })
        .catch(error => error)
}

//gets data from api
const getData = () => 
    axios.get("https://api.vschool.io/jonacalde/todo")
        .then((response) => {
            response.data.forEach(data => {
                createToDo(data);
            });
        })
       .catch((error) => console.log(error));

// add todoItem to UI
const createToDo = (data) => {

    // Creates todo item container
    const div = document.createElement('div');
    if (data.completed) div.classList.add('complete');
    div.setAttribute('id', 'todoItem')
    document.getElementById('todo-list').appendChild(div)

    //creates hidden id tag
    const idEl = document.createElement('p');
    idEl.setAttribute('hidden', true);
    idEl.textContent = data._id;
    div.appendChild(idEl);

    //creates todo title
    const titleEl = document.createElement('h1');
    titleEl.textContent = `${data.title}`;
    div.appendChild(titleEl);

    // creates checkbox to mark todo as complete 
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = data.completed;
    checkBox.addEventListener('click', completeToDo);
    div.appendChild(checkBox);

    // ******ADD EVENT LISTENER TO STRIKEOUT CHECKBOX!!!!!!!!!

    // //NOT WORKING RIGHT!!!!!**************************
    // if (checkBox.checked) {
    //     h1.style.textDecoration = "line-through" 
    //     h1.style.color = "#ff0000"
    //     checkBox.checked = true
    // }
    // //PUT to save check-marked item:
    // checkBox.addEventListener("click", function(){
    //     if (checkBox.checked){ // if checked T/F then strike
    //         axios.put(`https://api.vschool.io/jonacalde/todo/${todo._id}`, completeToDo ) //Object after id
    //         .then((response)=> {
    //             console.log("yes to no")
    //             listTodos([response.data])
    //             h1.style.textDecoration = "line-through"
    //             h1.style.color = "#ff0000"
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //         } else {
    //         axios.put(`https://api.vschool.io/jonacalde/todo/${todo._id}`, checkBoxNotCompleted )
    //         .then((response)=> {
    //             console.log("no to yes")
    //             listTodos([response.data])
    //             h2.style.textDecoration ="none"
    //             h2.style.color = "#2f4f4f"
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     }
    // })
    //***************************************** */
    

    // creates todo description
    const descEl = document.createElement('p');
    descEl.textContent = `${data.description}`;
    div.appendChild(descEl);

    // creates todo img
    const imgEl = document.createElement('img');
    imgEl.src = data.imgUrl;
    div.appendChild(imgEl);

    //creates todo price
    const priceEl = document.createElement('p');
    priceEl.textContent = `Cost: $${data.price}`;
    div.appendChild(priceEl);

    //adds delete button for todo item
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = `Delete`;
    deleteBtn.addEventListener('click', deleteToDo);
    div.appendChild(deleteBtn);

     //creates item break
     const itemBreak = document.createElement('p');
     itemBreak.textContent = `-----------------------------------------------`;
     div.appendChild(itemBreak);
}

getData();





