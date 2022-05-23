const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// Using the provided `peopleArray` (bottom of this article), write a function that:
// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

function sortedOfAge(arr) {
const result = arr
.filter(function(oldEnough){
    return oldEnough.age > 18;
})
.sort(function(a, b){
    if(a.lastName < b.lastName) { 
        return -1; 
    }
    if(a.lastName > b.lastName) {      
        return 1; 
    }
})
.map((tag) => "<li>" + tag.firstName + "" + tag.lastName +  " is " + tag.age + "</li>")

return result
}
console.log(sortedOfAge(peopleArray));
 /* Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 