var ask = require('readline-sync');
var input = ask.question('What phrase would you like to encrypt? ').toUpperCase();
var shift = parseInt(ask.question('How many letters would you like to shift? '));

//create an array containing the letters of the alphabet so that they can easily be referenced by a number
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//create an array to hold 
var toNumber = [];

// create a string variable to hold the output
var output = "";

//match the letters in the phrase to an index in the alphabet array using a for loop
function cipher() {
    for (var i = 0; i < input.length; i++) {
        var isLetter = false;
        for (var j = 0; j < alphabet.length; j++) {
            if (input[i] === alphabet[j]) {
                toNumber.push((j + shift) % 26);
                isLetter = true;
            }
        }
        if (!isLetter) {
            toNumber.push(input[i]);
        }
    }
    for (var k = 0; k < toNumber.length; k++)
        if (!isNaN(toNumber[k])) {
            if (toNumber[k] === " ") {
                output += " ";
            } else {
                output += (alphabet[toNumber[k]]);
            }
        } else {
            output += (toNumber[k]);
        }
    return output;
}
console.log(cipher());