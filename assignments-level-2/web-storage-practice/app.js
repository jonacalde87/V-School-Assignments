// Local storage

// Session storage

// JSON= JavaScript Object Notation: to save array and objects in local storage
    // JSON.stringify => turning JS into JSON
    // JSON.parse => Turns JSON into JS

// setter: to save items
    localStorage.setItem("name", "steve") // string
    localStorage.setItem("age", 9) 
    localStorage.setItem("isAlive", true) // boolean
    // with an array []
    localStorage.setItem("friend", JSON.stringify(["mark", "tina", "jay"]))
    //with an object {}
    localStorage.setItem("address", JSON.stringify({street: "123 street", city: "SLC"}))

// getter: to retrieve data
// get string
    const name = localStorage.getItem("name")
    console.log(name)
    //OUTPUT: steve

    //get number
    const age = localStorage.getItem("number")
    console.log(age)
    //OUTPUT: 9

    //get boolean
    const isAlive = localStorage.getItem("isAlive")
    console.log(isAlive)
    //OUTPUT: true

    //get array
    const friends = JSON.parse(localStorage.getItem("friends"))
    console.log(friends[0])
    //OUTPUT: ["mark"]

    //get object
    const address = JSON.parse(localStorage.getItem("address")) 
    console.log(address)
    //OUTPUT: {street: "123 street", city: "SLC"}

// Remove from local storage
localStorage.removeItem("age")

