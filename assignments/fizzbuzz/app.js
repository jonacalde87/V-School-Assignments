// fizzBuzz coding challenge
/* Write a short program that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number. */

//Optional: tally each fizz, buzz, and fizzbuzz..NOT DONE
// let fizzTally = 0
// let buzzTally = 0
// let fizzBuzzTally = 0

//function tally() {
for (let num = 1; num <= 100; num++) {    
    if (num % 15 == 0) {
        console.log("FizzBuzz") 
    } else if (num % 3 == 0) {
        console.log("Fizz") 
    } else if (num % 5 == 0) {
        console.log("Buzz") 
    } else console.log(num)
}


