const readline = require("readline-sync");

//Introduction Player choice
let player = ["Mario", "Luigi"]
let playerName = readline.keyInSelect(player)

//Player status
let playerStatus = ["Small", "Big", "Powered Up", "Dead"]

//Player class construction()
class Player {
    constructor(playerName) {
        this.name = playerName
        this.totalCoins = 0
        this.status = playerStatus[0]
    }

    //setName function
    setName(playerName) {
        this.name = playerName
    }

    //gotHit function
    gotHit() {
        // if hit, status goes from Powered Up > Big > Small > Dead. 
        // original array: ["Small", "Big", "Powered Up", "Dead"]
        if (this.hasStar === true) {
            console.log("The star protected you!")
            this.hasStar = false
        }
        if (this.status === "Powered Up") {
            this.status = playerStatus[1]
        } else if (this.status === "Big") {
            this.status = playerStatus[0]
        } else if (this.status === "Small") {
            this.status = playerStatus[3]
        }
    }

    //powerUp function() => Small > Big > Powered Up > get star. 
    // original array: ["Small", "Big", "Powered Up", "Dead"]
    gotPowerup() {      
        if (this.status === "Small") { 
            this.status = playerStatus[1]
        } else if (this.status === "Big") {
            this.status = playerStatus[2]
        } else if (this.status === "Powered Up") {
            this.hasStar = true;
            console.log("You received a star!!")
        }
    }

    //Add Coin Function
    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`Name: ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        if (this.hasStar === true) {
            console.log(`You have a star!`)
        }
    }
}
//***** class ends*****/

//create player
const gameOn = () => {
    const player1 = new Player();
    player1.setName(player[playerName])

    const gameInterval = setInterval(() => { //setInterval() => will last for 1.5 secs before continue
        
        //Create a random range function that returns either 0, 1, or 2.
        let numRandom = Math.floor(Math.random() * (2 - 0 + 1));       
        if (numRandom === 0) { // if 0 call gotHit()
            player1.gotHit()
        } else if (numRandom === 1) { // if 1 call powerUp()
            player1.gotPowerup()
        } else if (numRandom === 2) { // if 2 call addCoin()
            player1.addCoin()
        } if (player1.status === "Dead") { 
            clearInterval(gameInterval) //to stop the timer
            console.log(`Game Over... You are less than small... you are DEAD`)
            gameActive = false
        }
        console.log(numRandom)
        player1.print()
    }, 1500)
}
//to run game
gameOn()