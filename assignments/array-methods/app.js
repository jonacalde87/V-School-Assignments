var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
vegetables.pop()
console.log("vegetables: ", vegetables)
// 2. Remove the first item from the fruit array.
fruit.shift()
console.log("fruit: ", fruit)
// 3. Find the index of "orange."
var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)
// 4. Add that number to the end of the fruit array.
fruit.push("1")
console.log("fruit: ", fruit)
// 5. Use the length property to find the length of the vegetable array.
console.log(vegetables.length)
// 6. Add that number to the end of the vegetable array.
vegetables.push("3")
console.log("vegetables: ", vegetables)
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log("food: ", food)
// 8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)
console.log("food: ", food)
// 9. Reverse your array.
food.reverse("")
console.log("food: ", food)
// 10. Turn the array into a string and return it.
var lastFood = food.join()
console.log(lastFood)