// JS String Methods

// Methods are Functions 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp


/*toUpperCase & toLowerCase*/
    // var name = "luke"
    // var upperCaseLuke = name.toUpperCase()
    // console.log (upperCaseLuke) // upper case all string
    ///OUTPUT: LUKE

    // var lowerCaseLuke = upperCaseLuke.toLowerCase () // lowercase string
    // console.log(lowerCaseLuke)
    ///OUTPUT: lukes

/* concat */
    // var name = "luke"
    // var s = "s"
    // var newName = name.concat(s)
    // console.log(newName)
    /// OUTPUT: lukes

/* split: turn a string into array*/
    // var animal = "tiger"
    // var characterArray = animal.split("") // will split in "g"; leave it in blank for [ 'tiger' ]; or add ("") for [ 't', 'i', 'g', 'e', 'r' ]
    // console.log(characterArray)
    /// OUTPUT: [ 'ti', 'er' ]

/* slice: cut up string */ 
    // var phoneNumber = "5859669991" //585-966-9991
    // var first3 = phoneNumber.slice(0, 3) // index (start number, end number)
    // var next3 = phoneNumber.slice(3, 6)
    // var last4 = phoneNumber.slice(6) // no need to type last number
    // var phoneWithDashes = first3 + "-" + next3 + "-" + last4
    // console.log(phoneWithDashes)
    // //OUTPUT: 585-966-9991

/* indexOf: when need to know iF letter "C" is in a string */ 
    var city = "New York City" // ITS COUNTING THE WHITE SPACES
    var indexOfC = city.indexOf("C")
    console.log(indexOfC)
    //OUTPUT: 9