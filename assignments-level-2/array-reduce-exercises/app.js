// use reduce ()

// // 1) Turn an array of numbers into a total of all the numbers
const arr = [1,2,3]
const result = arr.reduce(function(final, num) {
    final += num
    return final
})
console.log(result)
// //OUTPUT: 6

// 2) Turn an array of numbers into a long string of all those numbers
const arr = [1,2,3]
const stringConcat = arr.reduce(function(final,string) {
    return final + "" + string
})
console.log(stringConcat)
//OUTPUT: 123

// 3) Turn an array of voter objects into a count of how many people voted
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const totalVotes = voters.reduce(function(final, voter) {
    if(voter.voted) {
        final++
    }
    return final
}, 0)
console.log(totalVotes)
OUTPUT:  7

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const shoppingSpree = wishlist.reduce(function(final, finalAmount) {
    final += finalAmount.price  
    return final
}, 0)
console.log(shoppingSpree)
// OUTPUT: 227005

// 5) Given an array of arrays, flatten them into a single array
const arr = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
const flatten = arr.reduce(function(final, singleArr) {
    final.push(...singleArr)
    return final
},[])
console.log(flatten)
// OUTPUT: ['1',  '2', '3', true, 4, 5, 6]

// 6) Given an array of potential voters, return an object representing the results of the vote
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const voterResults = voters.reduce(function(final, voter) {
    if(voter.age >= 18 && voter.age <= 25) {
        final.numYoungPeople++
    } else if(voter.age >= 26 && voter.age <= 35) {
        final.numMidsPeople++
    } else if(voter.age >= 36 && voter.age <= 55) {
        final.numOldsPeople++
    } 
    
    if(voter.age >= 18 && voter.age <= 25 && voter.voted) {
        final.numYoungVotes++
    } else if(voter.age >= 26 && voter.age <= 35 && voter.voted) {
        final.numMidVotesPeople++
    } else if(voter.age >= 36 && voter.age <= 55 && voter.voted) {
        final.numOldVotesPeople++
    }
    
    return final    
}, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0,
    numOldVotesPeople: 0, numOldsPeople: 0})

    console.log(voterResults)

// OUTPUT: 
 /*
 { numYoungVotes: 1,
   numYoungPeople: 4,
   numMidVotesPeople: 3,
   numMidsPeople: 4,
   numOldVotesPeople: 3,
   numOldsPeople: 4
 }
 */
