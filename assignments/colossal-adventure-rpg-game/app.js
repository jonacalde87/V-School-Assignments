const readlineSync = require("readline-sync");

let genNumInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let playerStatus = function (playerName, hp, inv) {
    this.playerName = playerName;
    this.hp = hp || 100;
    this.inv = inv || [];
    this.printPlayer = function () {
        console.log("Adventurer:" + this.playerName + " , Hp: " + this.hp);
        console.log("Inventory");
        for (i = 0; i < this.inv; i++) {
            console.log(inv[i]);
        }
    }
}

let enemy = function (type, hitPoints) {
    this.type = type
    this.hitPoints = hitPoints
    this.printEnemy = function () {
        console.log("You have found The " + this.type + " and it has " + this.hitPoints + " hp.")
    }
}

let enemies = function () {
    enemyType = ["Queen Ant", "Mosquito", "Giant Spider"];
    randomEnemy = enemyType[genNumInRange(0, enemyType.length)];
    randomHitpoints = 0;
    if (randomEnemy === "Queen Ant") {
        randomHitpoints = genNumInRange(80, 100);
    } else if (randomEnemy === "Mosquito") {
        randomHitpoints = genNumInRange(50, 79);
    } else {
        randomHitpoints = genNumInRange(20, 49);
    }
    randomEnemy = new enemy(randomEnemy, randomHitpoints);
    return randomEnemy;
};

// 1. Console must greet player with a fun message
console.log("Welcome stranger to an adventure that you will never forget!");

//2. Console must ask for the player's name and store it 
playerName = readlineSync.question("But first, tell me what's your name?: ");
user = new playerStatus(playerName);

const weapon = readlineSync.question("\nWhich weapon would you like to use? Type 'staff' or 'sword': ");

if (weapon === "staff") {
    console.log("You have chosen the staff! Enemies will burn.")
} else {
    console.log("You have chosen the sword! Slash and stab all the way.")
}


/* 3. Walking:
- The console will ask the user to enter a "w" to walk
- Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
- Use a while loop to control this flow. */
console.log("Adventurer " + playerName + ", may the gods help you in your path.")
while (true) {
    input = readlineSync.question("\nEnter 'w' to walk and press Enter: \n");
    if (input == "w") {
        chance = genNumInRange(0, 100);
        if (chance >= 50) {
            bug = enemies();
            bug.printEnemy();

            /* 4. If a wild enemy appears:
            - The enemy is random (can be chosen out of a minimum of 3 different enemy names)
            - The user can decide to attack or run
            - If attacking, a random amount of damage will be delt between a min and max
            - If running, there will be a 50% chance of escaping
            - After the player attacks or runs the enemy attacks back for a random damage amount
            - The player and enemy will attack each other in a loop until one of them passes out or dies.
            - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
            - If the enemy kills the player the console prints a cool death message and the game ends  */
            while (user.hp > 0 && bug.hitPoints > 0) {
                input = readlineSync.question("Do you want to run or attack?" + "\n Type 'r' or 'a': ");
                if (input == "a") {
                    damage = genNumInRange(20, 50);
                    bug.hitPoints -= damage;
                    console.log("\nYou hit " + bug.type + " for " + damage + " points");

                    if (bug.hitPoints < 0) {
                        console.log("You killed the " + bug.type);
                        upgrade = genNumInRange(20, 40);
                        user.hp += upgrade;
                        console.log("You now have " + user.hp + " hp.");
                        break;
                    }

                    damage2 = genNumInRange(20, 50);
                    user.hp -= damage2;
                    console.log("The " + bug.type + " hit you for " + damage2 + " points.");
                    console.log("You have " + user.hp + " hp left.");

                } else {
                    fiftyFifty = genNumInRange(0, 10);
                    if (fiftyFifty < 5) {
                        losePoints = genNumInRange(20, 40);
                        user.hp -= losePoints;
                        console.log("\nYou have escape from the " + bug.type + ", but you now have " + user.hp + " hp.");
                        break;


                    } else {
                        console.log("\nYou did not escape attack of the " + bug.type);
                        losePoints = genNumInRange(20, 40);
                        user.hp -= losePoints;
                        console.log("The " + bug.type + " has hit you. You lost " + losePoints + " hp.");
                        console.log("You have " + user.hp + " hp.");

                    }

                }
            }

        } else {
            console.log("There are no enemies near by.");

        }
        if (user.hp < 0) {
            console.log("The " + bug.type + " has killed you.")
            console.log("Adventurer " + playerName + " you have died." + " Your adventure is over")
            break

           
        }
    } else if (input == "print") {
        user.printPlayer();
    }
};