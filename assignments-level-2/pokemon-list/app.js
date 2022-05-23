//Use `https://api.vschool.io/pokemon` as your url for your XHR request to get the big list of pokemon.

const xhr = new XMLHttpRequest()

// method,       // url,               //Asynchronous?
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send() // to send request

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        //response
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0].pokemon)
    }
}

function showData(arr) {    
    for (let i = 0; i < arr.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)        
    }
    // console.log(data.objects.pokemon)
}