function forception (people, alphabet){  
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var splitAlphabet = alphabet.split("")
    for (var i = 0; i < people.length; i++){
        for (var j = 0; j < splitAlphabet.length; j++){ 
           // console.log(splitAlphabet[j])
        }
    var newArr = people[i] + ": ".concat(splitAlphabet)
    console.log(newArr)
    }
}
forception()