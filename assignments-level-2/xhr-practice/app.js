//instantiate http request
const xhr = new XMLHttpRequest()

       // method,         // url,               //Asynchronous?
xhr.open("GET", "https://swapi.co/api/people/1", true)
xhr.send() // to send request

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
    //response
     console.log(xhr.responseText)
     
             
    }
}