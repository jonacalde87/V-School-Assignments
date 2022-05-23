// Jonathan Calderon: changed errors in comments

/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"]; // changed Enemies to enemies

function whoWins(isThereKryptonite,enemyName) // typo in function, whoWins, isThereKryptonite. enemyName
{
if (!isThereKryptonite) // isThereKryptonite
{
    return "Superman beats " + enemyName + ", of course"; // white spaces in + enemyName + 
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. " + 
    enemyName +" could possibly win this one."; // enemyName
}
    }

for (var i = 0; i < enemies.length; i++) // white space inside function
{
    var isThereKryptonite; // isThereKryptonite, replace : with ;
    if (i % 2 === 0) { // white space
        isThereKryptonite = true; // isThereKryptonite
    } else {
        isThereKryptonite = false; //isThereKryptonite
    }
    console.log(whoWins(isThereKryptonite, enemies[i])); // whoWins, isThereKryptonite
}

function attracted () // replace long function name with shorter one
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()* 10) + 1); //white spaces, Math instead of Mat
}

console.log(attracted()) ; // console, replace long function name with shorter one, white spaces

var clarkKent = true; // white space
var superman = false; // = sign

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var quickChange = Math.random(); // replace long var name with shorter one, white space
    if (quickChange > 0.5) { // replace long function name with shorter one, remove =
        clarkKent = false; // white space
        superman = true; // white space
        console.log("Now I'm Superman!");
    }
}
