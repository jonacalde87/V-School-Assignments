// for loop

/* Write a loop that logs the numbers 0-10 (inclusive) to console, 
but if the number is 7, also log "Its your lucky day! */

for (i = 0; i <= 10; i++) {
    console.log(i)

    if (i == 7) {
        console.log("It's your lucky day")
    }
}

// for loops with arrays
/* create a loop that repear all the items in an array */
var favoriteThings = ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles", "Warm woollen mittens"]

for (i = 0; i < favoriteThings.length; i++) {
    console.log(favoriteThings[i]);
}

//while loops: will run infinite until condition is false
//write a loop that ask the user if they like raisings or not, they need to type yes or no only
var likesRaisings = prompt ("Do you like raisings? Type 'yes' or 'no':");
while (likesRaisings !== "yes" || likesRaisings !== "no") {
    likesRaisings = prompt ("Please type only 'yes' or 'no'. DO you like raisings?");
}
console.log("You said " + likesRaisings + "to my question")

//break keyword to stop loop early:
for(var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
        console.log("We found a true!");
        break;
    }
}

//continue keyword: to skip the iteration and go to the next one
for (var i = 0; i <= 10; i++) {
    if (i === 7) { // to skip #7
        continue;
    }
    console.log(i);
}