const form = document.billing

form.addEventListener("submit", function (e) {
    e.preventDefault()

    //this to collect the input values from the user
    const goombaCount = form.goombaPest.value
    const bobombCount = form.bombPest.value
    const cheepcheepCount = form.cheepPest.value

    const goombaCost = goombaCount * 5
    const bobombCost = bobombCount * 7
    const cheepcheepCost = cheepcheepCount * 11

    const result = goombaCost + bobombCost + cheepcheepCost

    console.log("You owe " + goombaCost + " coins for Goombas, \n" +
        bobombCost + " coins for Bob-ombs, and \n" + cheepcheepCost +
        " coins for Cheep-cheeps." + "\n\nYour grand total is " + result + " coins.")

    //this is to display the total in the DOM(browser)
    document.getElementById("total").innerHTML = "You owe " + goombaCost + " coins for Goombas, \n" +
        bobombCost + " coins for Bob-ombs, and \n" + cheepcheepCost +
        " coins for Cheep-cheeps." + "\n\nYour grand total is " + result + " coins."
})

