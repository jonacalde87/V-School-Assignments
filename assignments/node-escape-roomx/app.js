const readline = require("readline-sync");
let key = 0;

const name = readline.question("What is your name? ");

while (true) {
    mainMenu();
}
function mainMenu() {
    var choice = readline.question("\n" + name + ", " + "what will you do?\n" + "1) Open the door\n" + "2) Find the key\n" + "3) Put hand in the hole\n");

    switch (choice) {
        case "1":
            if (key === 0) {
                console.log("\nIt's locked...")
            } else if (key === 1) {
                victoryMenu();
            }
            break;
        case "2":
            console.log("\nYou've acquired a key!")
            key = 1;
            break;
        case "3":
            defeatMenu();
            break;
        default:
            console.log("\nPlease enter either '1', '2', or '3'\n")
            break;
    }
}
function victoryMenu() {
    let repeat = readline.question("\nCongratulations! " +
        "You've made it out of the Escape Room!\n" +
        "Play again?\n 1) Yes\n 2) No\n");
    switch (repeat) {
        case "1":
            mainMenu();
            break;
        case "2":
            console.log("\nGoodbye!" + name);
            process.exit()
        default:
            console.log("Please enter either '1' or '2'");
            victoryMenu();
            break;
    }
}
function defeatMenu() {
    let repeat = readline.question("\nGame Over \n You died! \n Play again? \n 1) Yes \n 2) No\n");
    switch (repeat) {
        case "1":
            mainMenu();
            break;
        case "2":
            console.log("Goodbye!");
            process.exit()
        default:
            console.log("Please enter either '1' or '2'");
            defeatMenu();
            break;
    }
} 